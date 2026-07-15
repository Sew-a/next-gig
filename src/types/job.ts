import { z } from "zod";

export const JobSchema = z.object({
  slug: z.string(),
  company_name: z.string(),
  title: z.string(),
  description: z.string(),
  remote: z.boolean(),
  url: z.string().url(),
  tags: z.array(z.string()),
  job_types: z.array(z.string()),
  location: z.string(),
  created_at: z.number(),
});

export type Job = z.infer<typeof JobSchema>;

// ─── Arbeitnow ───────────────────────────────────
export const ArbeitnowJobSchema = z.object({
  slug: z.string(),
  company_name: z.string(),
  title: z.string(),
  description: z.string(),
  remote: z.boolean(),
  url: z.string().url(),
  tags: z.array(z.string()),
  job_types: z.array(z.string()),
  location: z.string(),
  created_at: z.number(),
});

export const ArbeitnowResponseSchema = z.object({
  data: z.array(ArbeitnowJobSchema),
  links: z
    .object({
      first: z.string().nullable().optional(),
      last: z.string().nullable().optional(),
      prev: z.string().nullable().optional(),
      next: z.string().nullable().optional(),
    })
    .partial()
    .optional(),
  meta: z.record(z.string(), z.unknown()).optional(),
});

// ─── Jobicy ──────────────────────────────────────
export const JobicyJobSchema = z.object({
  id: z.number(),
  url: z.string().url(),
  jobTitle: z.string(),
  companyName: z.string(),
  jobIndustry: z.array(z.string()).optional(),
  jobType: z.array(z.string()).optional(),
  jobGeo: z.string().optional(),
  jobExcerpt: z.string().optional(),
  jobDescription: z.string().optional(),
  pubDate: z.string().optional(),
});

export const JobicyResponseSchema = z.object({
  jobs: z.array(JobicyJobSchema),
  jobCount: z.number().optional(),
});

// ─── Remotive ────────────────────────────────────
export const RemotiveJobSchema = z.object({
  id: z.number(),
  url: z.string().url(),
  title: z.string(),
  company_name: z.string(),
  company_logo: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  job_type: z.string().optional(),
  publication_date: z.string().optional(),
  candidate_required_location: z.string().optional(),
  salary: z.string().optional(),
  description: z.string().optional(),
});

export const RemotiveResponseSchema = z.object({
  jobs: z.array(RemotiveJobSchema),
  "job-count": z.number().optional(),
  "total-job-count": z.number().optional(),
});

// ─── Himalayas ───────────────────────────────────
export const HimalayasJobSchema = z.object({
  title: z.string(),
  companyName: z.string(),
  applicationLink: z.string().url(),
  guid: z.string().optional(),
  description: z.string().optional(),
  excerpt: z.string().optional(),
  employmentType: z.string().optional(),
  locationRestrictions: z.array(z.string()).optional(),
  categories: z.array(z.string()).optional(),
  parentCategories: z.array(z.string()).optional(),
  pubDate: z.number().optional(),
});

export const HimalayasResponseSchema = z.object({
  jobs: z.array(HimalayasJobSchema),
  offset: z.number(),
  limit: z.number(),
  totalCount: z.number(),
});

// ─── Unified types ───────────────────────────────
export interface JobsPage {
  jobs: Job[];
  page: number;
  hasNextPage: boolean;
}

/** Query params our internal /api/jobs route accepts. */
export interface JobsQuery {
  page: number;
  search?: string;
  remoteOnly?: boolean;
}
