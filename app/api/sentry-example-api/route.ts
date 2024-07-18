import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  throw new Error("Sentry Example API Route Error");
}
// import type { NextApiRequest, NextApiResponse } from "next";

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   throw new Error("API throw error test");
//   res.status(200).json({ name: "John Doe" });
// };
