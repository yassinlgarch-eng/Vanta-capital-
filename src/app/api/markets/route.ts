import { NextResponse } from "next/server";
import { getMarkets } from "@/lib/marketApi";

// Cache the upstream call on the server for 30s to avoid burning quota
// when many clients refresh at the same time.
export const revalidate = 30;
export const runtime = "nodejs";

export async function GET() {
  const result = await getMarkets();
  return NextResponse.json(result, {
    headers: {
      // Browser/CDN: short cache, allow stale while revalidating
      "Cache-Control":
        "public, s-maxage=30, stale-while-revalidate=60, max-age=15",
    },
  });
}
