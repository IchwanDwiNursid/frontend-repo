import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get("refresh_token");
  const cookieString = cookie ? `refresh_token=${cookie.value}` : "";
  const fetchData = await fetch("http://localhost:5000/fetch-user-data", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieString,
    },
  });

  const result = await fetchData.json();

  if (result.errors) {
    return NextResponse.json({
      errors: result.errors,
    });
  }

  return NextResponse.json({
    data: result.data,
  });
}
