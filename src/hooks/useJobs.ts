import { useCallback, useEffect, useReducer, useRef } from "react";
import { Job } from "@/types/job";

interface UseJobsParams {
  search: string;
  remoteOnly: boolean;
  initialJobs?: Job[];
  initialHasNextPage?: boolean;
}

type State =
  | { status: "idle"; jobs: Job[]; page: number; hasNextPage: boolean }
  | { status: "loading"; jobs: Job[]; page: number; hasNextPage: boolean }
  | { status: "loading-more"; jobs: Job[]; page: number; hasNextPage: boolean }
  | { status: "error"; jobs: Job[]; page: number; hasNextPage: boolean; message: string }
  | { status: "success"; jobs: Job[]; page: number; hasNextPage: boolean };

type Action =
  | { type: "QUERY_CHANGED" }
  | { type: "FETCH_START"; mode: "replace" | "append" }
  | { type: "FETCH_SUCCESS"; jobs: Job[]; page: number; hasNextPage: boolean; mode: "replace" | "append" }
  | { type: "FETCH_ERROR"; message: string };

const initialState: State = { status: "idle", jobs: [], page: 0, hasNextPage: true };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "QUERY_CHANGED":
      return { status: "loading", jobs: [], page: 0, hasNextPage: true };
    case "FETCH_START":
      return {
        ...state,
        status: action.mode === "replace" ? "loading" : "loading-more",
      };
    case "FETCH_SUCCESS":
      return {
        status: "success",
        jobs: action.mode === "replace" ? action.jobs : [...state.jobs, ...action.jobs],
        page: action.page,
        hasNextPage: action.hasNextPage,
      };
    case "FETCH_ERROR":
      return { ...state, status: "error", message: action.message };
    default:
      return state;
  }
}

export function useJobs({
  search,
  remoteOnly,
  initialJobs,
  initialHasNextPage,
}: UseJobsParams) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (base): State =>
      initialJobs
        ? {
            status: "success",
            jobs: initialJobs,
            page: 1,
            hasNextPage: initialHasNextPage ?? false,
          }
        : base
  );

  const abortControllerRef = useRef<AbortController | null>(null);

  const latestRequestId = useRef(0);

  const runFetch = useCallback(
    async (page: number, mode: "replace" | "append") => {
      abortControllerRef.current?.abort();
      const controller = new AbortController();
      abortControllerRef.current = controller;

      const requestId = ++latestRequestId.current;
      dispatch({ type: "FETCH_START", mode });

      const params = new URLSearchParams({ page: String(page) });
      if (search) params.set("search", search);
      if (remoteOnly) params.set("remoteOnly", "true");

      try {
        const response = await fetch(`/api/jobs?${params}`, {
          signal: controller.signal,
        });

        if (requestId !== latestRequestId.current) return; // stale, ignore

        if (!response.ok) {
          const body = await response.json().catch(() => null);
          dispatch({
            type: "FETCH_ERROR",
            message: body?.message ?? `Request failed (${response.status})`,
          });
          return;
        }

        const payload = (await response.json()) as {
          jobs: Job[];
          page: number;
          hasNextPage: boolean;
        };

        if (requestId !== latestRequestId.current) return; // stale, ignore

        dispatch({ type: "FETCH_SUCCESS", ...payload, mode });
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        if (requestId !== latestRequestId.current) return;
        dispatch({
          type: "FETCH_ERROR",
          message: err instanceof Error ? err.message : "Unknown error",
        });
      }
    },
    [search, remoteOnly]
  );

  const isFirstRun = useRef(true);

  useEffect(() => {
    const skipInitialFetch =
      isFirstRun.current && Boolean(initialJobs) && !search && !remoteOnly;
    isFirstRun.current = false;

    if (skipInitialFetch) return;

    dispatch({ type: "QUERY_CHANGED" });
    runFetch(1, "replace");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, remoteOnly]);

  useEffect(() => {
    return () => abortControllerRef.current?.abort();
  }, []);

  const fetchNextPage = useCallback(() => {
    if (state.status === "loading" || state.status === "loading-more") return;
    if (!state.hasNextPage) return;
    runFetch(state.page + 1, "append");
  }, [runFetch, state.status, state.hasNextPage, state.page]);

  return { ...state, fetchNextPage, retry: () => runFetch(1, "replace") };
}
