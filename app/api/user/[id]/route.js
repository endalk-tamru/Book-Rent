import { NextResponse } from "next/server";

import connectToDB from "@/lib/database";
import generateToken from "@/lib/generateToken";
import User from "@/models/userModel";

// @desc   Retrieve a single user by ID
// @route  GET /api/user/:id
// @access Admin
export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectToDB();

    const user = await User.findById(id);

    if (user) {
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch user", error: error.message },
      { status: 500 }
    );
  }
}
