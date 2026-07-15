"use client";
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from "react";
import { Job } from "@/types/job";

const STORAGE_KEY = "next-gig:saved-jobs";

type SavedJobsState = Record<string, Job>;

type SavedJobsAction =
    | { type: "HYDRATE"; jobs: SavedJobsState }
    | { type: "SAVE"; job: Job }
    | { type: "REMOVE"; slug: string };

function reducer(state: SavedJobsState, action: SavedJobsAction): SavedJobsState {
    switch (action.type) {
        case "HYDRATE":
            return action.jobs;
        case "SAVE":
            return { ...state, [action.job.slug]: action.job };
        case "REMOVE": {
            const next = { ...state };
            delete next[action.slug];
            return next;
        }
    }
}

interface SavedJobsContextValue {
    savedJobs: Job[];
    isSaved: (slug: string) => boolean;
    saveJob: (job: Job) => void;
    removeJob: (slug: string) => void;
    toggleJob: (job: Job) => void;
}

const SavedJobsContext = createContext<SavedJobsContextValue | null>(null);

export function SavedJobsProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, {});

    useEffect(() => {
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored) dispatch({ type: "HYDRATE", jobs: JSON.parse(stored) });
        } catch {
        }
    }, []);

    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch {
        }
    }, [state]);

    const saveJob = useCallback((job: Job) => dispatch({ type: "SAVE", job }), []);
    const removeJob = useCallback((slug: string) => dispatch({ type: "REMOVE", slug }), []);
    const isSaved = useCallback((slug: string) => slug in state, [state]);
    const toggleJob = useCallback(
        (job: Job) => (isSaved(job.slug) ? removeJob(job.slug) : saveJob(job)),
        [isSaved, removeJob, saveJob]
    );

    const value = useMemo<SavedJobsContextValue>(
        () => ({ savedJobs: Object.values(state), isSaved, saveJob, removeJob, toggleJob }),
        [state, isSaved, saveJob, removeJob, toggleJob]
    );

    return <SavedJobsContext.Provider value={value}>{children}</SavedJobsContext.Provider>;
}

export function useSavedJobs() {
    const ctx = useContext(SavedJobsContext);
    if (!ctx) {
        throw new Error("useSavedJobs must be used within a SavedJobsProvider");
    }
    return ctx;
}
