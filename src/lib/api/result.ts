
export type Result<T, E = ApiError> =
    | { ok: true; data: T }
    | { ok: false; error: E };

export function Ok<T>(data: T): Result<T, never> {
    return { ok: true, data };
}

export function Err<E>(error: E): Result<never, E> {
    return { ok: false, error };
}

/** A typed error shape instead of `unknown`/`Error` everywhere. */
export class ApiError extends Error {
    constructor(
        message: string,
        public readonly kind: "network" | "http" | "parse" | "aborted",
        public readonly status?: number
    ) {
        super(message);
        this.name = "ApiError";
    }
}
