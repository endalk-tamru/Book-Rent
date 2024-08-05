import { NextResponse } from "next/server";

import connectToDB from "@/lib/database";
import generateToken from "@/lib/generateToken";
import User from "@/models/userModel";

// @desc   Login a new user
// @route  POST /api/user/login
// @access Public
export async function POST(req) {
  const { email, password } = await req.json();

  try {
    await connectToDB();

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return NextResponse.json(
        {
          _id: user._id,
          email: user.email,
          token: generateToken(user._id),
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to login", error: error.message },
      { status: 500 }
    );
  }
}
