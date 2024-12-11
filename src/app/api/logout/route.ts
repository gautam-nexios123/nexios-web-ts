import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out successfully" });

  // Clear cookies by setting them with empty values and maxAge: 0
  res.cookies.set("authToken", "", { httpOnly: true, maxAge: 0 });
  res.cookies.set("userData", "", { httpOnly: true, maxAge: 0 });

  return res;
}
