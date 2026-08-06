"use client";
interface JobFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  remoteOnly: boolean;
  onRemoteOnlyChange: (value: boolean) => void;
}

export function JobFilters({
  search,
  onSearchChange,
  remoteOnly,
  onRemoteOnlyChange,
}: JobFiltersProps) {
  return (
    <div className="jobs-filters">
      <input
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by title, company, or tag..."
        aria-label="Search jobs"
        className="jobs-filters__search"
      />
      <label className="jobs-filters__toggle">
        <input
          type="checkbox"
          checked={remoteOnly}
          onChange={(e) => onRemoteOnlyChange(e.target.checked)}
        />
        Remote only
      </label>
    </div>
  );
}
