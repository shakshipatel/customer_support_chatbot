import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    // Clear the user session cookie
    cookieStore.delete("user_session");

    // Redirect to home page
    return NextResponse.redirect(new URL("/", req.url));
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Failed to logout" }, { status: 500 });
  }
}
