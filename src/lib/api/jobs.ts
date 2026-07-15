import { z } from "zod";
import {
  Job,
  ArbeitnowJobSchema,
  JobicyJobSchema,
  RemotiveJobSchema,
  HimalayasJobSchema,
} from "@/types/job";
import { fetchJson } from "./fetchJson";
import {
  ArbeitnowResponseSchema,
  JobicyResponseSchema,
  RemotiveResponseSchema,
  HimalayasResponseSchema,
} from "@/types/job";

const PAGE_SIZE = 30;

// ─── Normalizers ─────────────────────────────────

function normalizeArbeitnow(raw: z.infer<typeof ArbeitnowJobSchema>): Job {
  return {
    slug: `arbeitnow-${raw.slug}`,
    company_name: raw.company_name,
    title: raw.title,
    description: raw.description,
    remote: raw.remote,
    url: raw.url,
    tags: raw.tags,
    job_types: raw.job_types,
    location: raw.location,
    created_at: raw.created_at,
  };
}

function normalizeJobicy(raw: z.infer<typeof JobicyJobSchema>): Job {
  const tags = [
    ...(raw.jobIndustry ?? []),
    ...(raw.jobType ?? []),
  ];
  return {
    slug: `jobicy-${raw.id}`,
    company_name: raw.companyName,
    title: raw.jobTitle,
    description: raw.jobDescription ?? raw.jobExcerpt ?? "",
    remote: true,
    url: raw.url,
    tags,
    job_types: raw.jobType ?? [],
    location: raw.jobGeo ?? "Remote",
    created_at: raw.pubDate
      ? Math.floor(new Date(raw.pubDate).getTime() / 1000)
      : 0,
  };
}

function normalizeRemotive(raw: z.infer<typeof RemotiveJobSchema>): Job {
  const tags = [
    ...(raw.tags ?? []),
    ...(raw.category ? [raw.category] : []),
  ];
  return {
    slug: `remotive-${raw.id}`,
    company_name: raw.company_name,
    title: raw.title,
    description: raw.description ?? "",
    remote: true,
    url: raw.url,
    tags,
    job_types: raw.job_type ? [raw.job_type] : [],
    location: raw.candidate_required_location ?? "Remote",
    created_at: raw.publication_date
      ? Math.floor(new Date(raw.publication_date).getTime() / 1000)
      : 0,
  };
}

function normalizeHimalayas(raw: z.infer<typeof HimalayasJobSchema>): Job {
  const locationRestrictions = raw.locationRestrictions ?? [];
  const isRemote =
    locationRestrictions.length === 0 ||
    locationRestrictions.some(
      (l) => l.toLowerCase() === "worldwide" || l.toLowerCase() === "remote"
    );
  const tags = [
    ...(raw.categories ?? []),
    ...(raw.parentCategories ?? []),
  ];
  return {
    slug: `himalayas-${raw.guid ?? raw.applicationLink}`,
    company_name: raw.companyName,
    title: raw.title,
    description: raw.description ?? raw.excerpt ?? "",
    remote: isRemote,
    url: raw.applicationLink,
    tags,
    job_types: raw.employmentType ? [raw.employmentType] : [],
    location:
      locationRestrictions.length > 0
        ? locationRestrictions.join(", ")
        : "Worldwide",
    created_at: raw.pubDate ?? 0,
  };
}

// ─── Source fetchers ─────────────────────────────

async function fetchArbeitnow(): Promise<Job[]> {
  const result = await fetchJson(
    "https://www.arbeitnow.com/api/job-board-api",
    ArbeitnowResponseSchema,
    { next: { revalidate: 300 } }
  );
  if (!result.ok) return [];
  return result.data.data.map(normalizeArbeitnow);
}

async function fetchJobicy(): Promise<Job[]> {
  const result = await fetchJson(
    "https://jobicy.com/api/v2/remote-jobs?count=100",
    JobicyResponseSchema,
    { next: { revalidate: 300 } }
  );
  if (!result.ok) return [];
  return result.data.jobs.map(normalizeJobicy);
}

async function fetchRemotive(): Promise<Job[]> {
  const result = await fetchJson(
    "https://remotive.com/api/remote-jobs",
    RemotiveResponseSchema,
    { next: { revalidate: 300 } }
  );
  if (!result.ok) return [];
  return result.data.jobs.map(normalizeRemotive);
}

async function fetchHimalayas(): Promise<Job[]> {
  const result = await fetchJson(
    "https://himalayas.app/jobs/api/search?worldwide=true&sort=recent",
    HimalayasResponseSchema,
    { next: { revalidate: 300 } }
  );
  if (!result.ok) return [];
  return result.data.jobs.map(normalizeHimalayas);
}

// ─── Merge + paginate ────────────────────────────

function dedupe(jobs: Job[]): Job[] {
  const seen = new Map<string, Job>();
  for (const job of jobs) {
    const key = `${job.title.toLowerCase()}|${job.company_name.toLowerCase()}`;
    if (!seen.has(key)) {
      seen.set(key, job);
    }
  }
  return Array.from(seen.values());
}

export async function getJobsPage(query: {
  page: number;
  search?: string;
  remoteOnly?: boolean;
}): Promise<{ jobs: Job[]; page: number; hasNextPage: boolean }> {
  const batches = await Promise.allSettled([
    fetchArbeitnow(),
    fetchJobicy(),
    fetchRemotive(),
    fetchHimalayas(),
  ]);

  let allJobs: Job[] = [];
  for (const result of batches) {
    if (result.status === "fulfilled") {
      allJobs.push(...result.value);
    }
  }

  allJobs = dedupe(allJobs);

  const search = query.search?.trim().toLowerCase();
  if (search) {
    allJobs = allJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(search) ||
        job.company_name.toLowerCase().includes(search) ||
        job.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  }

  if (query.remoteOnly) {
    allJobs = allJobs.filter((job) => job.remote);
  }

  // Sort newest first
  allJobs.sort((a, b) => b.created_at - a.created_at);

  const start = (query.page - 1) * PAGE_SIZE;
  const pageJobs = allJobs.slice(start, start + PAGE_SIZE);

  return {
    jobs: pageJobs,
    page: query.page,
    hasNextPage: start + PAGE_SIZE < allJobs.length,
  };
}
