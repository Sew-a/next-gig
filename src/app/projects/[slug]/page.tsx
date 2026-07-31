import { redirect } from "next/navigation";

export default function OldProject({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/work/${params.slug}`);
}
