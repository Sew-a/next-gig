import { useCallback, useEffect, useState } from "react";

export function useLocalStorageState<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(defaultValue);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        try {
            const stored = window.localStorage.getItem(key);
            if (stored !== null) {
                setValue(JSON.parse(stored) as T);
            }
        } catch {
        } finally {
            setHydrated(true);
        }
    }, [key]);

    const update = useCallback(
        (next: T | ((prev: T) => T)) => {
            setValue((prev) => {
                const resolved =
                    typeof next === "function" ? (next as (prev: T) => T)(prev) : next;
                try {
                    window.localStorage.setItem(key, JSON.stringify(resolved));
                } catch {
                }
                return resolved;
            });
        },
        [key]
    );

    return [value, update, hydrated] as const;
}
