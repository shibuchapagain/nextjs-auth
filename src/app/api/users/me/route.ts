import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db";
connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const response = await User.findById(userId).select("-password");
    return NextResponse.json({ success: true, data: response });
  } catch (err) {
    console.log(err);
  }
}
