import { NextResponse } from "next/server";
import { getNews } from "@/lib/newsApi";

// News updates much less frequently than prices — 5 minute cache.
export const revalidate = 300;
export const runtime = "nodejs";

export async function GET() {
  const result = await getNews();
  return NextResponse.json(result, {
    headers: {
      "Cache-Control":
        "public, s-maxage=300, stale-while-revalidate=600, max-age=120",
    },
  });
}
