import { NextRequest, NextResponse } from "next/server";
import { getJobsPage } from "@/lib/api/jobs";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const page = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);
    const search = searchParams.get("search") ?? undefined;
    const remoteOnly = searchParams.get("remoteOnly") === "true";

    const data = await getJobsPage({ page, search, remoteOnly });
    return NextResponse.json(data);
}
