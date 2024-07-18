import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET(req: NextApiRequest, res: NextApiResponse) {
  throw new Error("API throw error test");
}
