import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
// export function GET() {
//   throw new Error("Sentry Example API Route Error");
//   return NextResponse.json({ data: "Testing Sentry Error..." });
// }

export default (req: NextApiRequest, res: NextApiResponse) => {
  throw new Error("API throw error test");
};
