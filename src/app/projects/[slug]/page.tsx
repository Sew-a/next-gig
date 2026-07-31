import { redirect } from "next/navigation";

export const runtime = "edge";

export default function OldProject({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/work/${params.slug}`);
}
