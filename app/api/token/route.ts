import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get("refresh_token");
  const cookieString = cookie && cookie.value;

  return NextResponse.json({
    data: cookieString,
  });
}
