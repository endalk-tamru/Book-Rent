import { NextResponse } from "next/server";

import connectToDB from "@/lib/database";
import generateToken from "@/lib/generateToken";
import User from "@/models/userModel";

// @desc   Register a new user
// @route  POST /api/user
// @access Public
export async function POST(req) {
  const { email, password } = await req.json();

  try {
    await connectToDB();

    const userExists = await User.findOne({ email });

    if (userExists) {
      NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const user = await User.create({
      email,
      password,
    });

    if (user) {
      return NextResponse.json(
        {
          _id: user._id,
          email: user.email,
          token: generateToken(user._id),
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to save a new user", error: error.message },
      { status: 500 }
    );
  }
}

// @desc   Get all users
// @route  GET /api/user
// @access Admin
export async function GET(req) {
  try {
    await connectToDB();

    const users = await User.find({});

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch users", error: error.message },
      { status: 500 }
    );
  }
}
