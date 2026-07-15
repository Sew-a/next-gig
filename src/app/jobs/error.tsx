"use client"; // error.tsx is always a Client Component — it needs the "reset" function

import { useEffect } from "react";

export default function JobsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Jobs page failed to load:", error);
  }, [error]);

  return (
    <div className="jobs-error" role="alert">
      <p>Something went wrong loading job listings.</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
