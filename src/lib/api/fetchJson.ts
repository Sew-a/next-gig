import { z } from "zod";
import { ApiError, Err, Ok, Result } from "./result";

export async function fetchJson<T>(
    url: string,
    schema: z.ZodSchema<T>,
    init?: RequestInit
): Promise<Result<T, ApiError>> {
    let response: Response;

    try {
        response = await fetch(url, init);
    } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
            return Err(new ApiError("Request aborted", "aborted"));
        }
        return Err(
            new ApiError(
                err instanceof Error ? err.message : "Network request failed",
                "network"
            )
        );
    }

    if (!response.ok) {
        return Err(
            new ApiError(
                `Request failed with status ${response.status}`,
                "http",
                response.status
            )
        );
    }

    let json: unknown;
    try {
        json = await response.json();
    } catch {
        return Err(new ApiError("Response was not valid JSON", "parse"));
    }

    const parsed = schema.safeParse(json);
    if (!parsed.success) {
        return Err(new ApiError("Response failed schema validation", "parse"));
    }

    return Ok(parsed.data);
}
