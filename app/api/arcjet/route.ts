import arcjet, { tokenBucket } from "@arcjet/next";
import { NextResponse } from "next/server";

export const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    tokenBucket({
      mode: "LIVE",
      characteristics: ["userId"],
      refillRate: 1,    // refill 5 tokens per interval
      interval: 86400,  // refill every 24 hours
      capacity: 1,      // bucket maximum capacity of 5 tokens
    }),
  ],
});

export async function GET(req: Request) {
  const userId = "user123";
  const decision = await aj.protect(req, { userId, requested: 5 });
  console.log("Arcjet decision", decision);

  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Too Many Requests", reason: decision.reason },
      { status: 429 },
    );
  }

  return NextResponse.json({ message: "Hello world" });
}
