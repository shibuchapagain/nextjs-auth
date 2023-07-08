// import { connect } from "@/db";
// import User from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

// connect();

// export async function POST(request: NextRequest, response: NextResponse) {
//   try {
//     const reqBody = await request.json();
//     const { email, password } = reqBody;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ status: 400, error: "User does not exist" });
//     }
//     const validatePassword = await bcryptjs.compare(password, user?.password);
//     if (!validatePassword) {
//       return NextResponse.json({
//         status: 400,
//         error: "Invalid email or password",
//       });
//     }
//     const tokenData = {
//       id: user?._id,
//       username: user?.username,
//       email: user?.email,
//     };
//     const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
//       expiresIn: "6h", // "1h" or "1d"
//     });
//     const response = NextResponse.json({
//       success: true,
//       message: "login successfully",
//     });
//     response.cookies.set("token", token, { httpOnly: true });
//     return response;
//   } catch (error: any) {
//     return NextResponse.json({ status: 500, error: error.message });
//   }
// }

//////////////////////////////////////////////////////////////////////////
import { connect } from "@/db";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody, "one");
    const user = await User.findOne({ email });
    console.log(user, "check user");
    if (user) {
      return NextResponse.json({ status: 400, error: "User already exist" });
    }
    // HASH PASSWORD
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    const data = await newUser.save();
    // const data = await User.create({
    //   username,
    //   email,
    //   password,
    // });
    // console.log(data, "data");
    return NextResponse.json({
      success: true,
      message: "User created successfully",
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ status: 500, error: error.message });
  }
}
