import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      success: true,
      message: "Logout success",
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (err: any) {
    return NextResponse.json({ status: 500, error: err?.message });
  }
}
