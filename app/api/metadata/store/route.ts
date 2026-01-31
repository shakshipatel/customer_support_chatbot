import { db } from "@/db/client";
import { metadata } from "@/db/schema";
import { isAuthorized } from "@/lib/isAuthorized";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const user = await isAuthorized();

    if (!user || typeof user !== "object" || !("email" in user)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { business_name, website_url, external_links } = await req.json();

    if (!business_name || !website_url) {
      return NextResponse.json(
        { error: "Missing business name or website URL" },
        { status: 400 }
      );
    }

    const metadataResponse = await db.insert(metadata).values({
      user_email: user.email,
      business_name,
      website_url,
      external_links,
    });

    (await cookies()).set("metadata", JSON.stringify({ business_name }));

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (error) {
    console.error("Metadata API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}