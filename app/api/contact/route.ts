
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // Get form data
    const data = await req.formData();

    // Extract fields
    const fullName = data.get("fullName") as string;
    const company = data.get("company") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const service = data.get("service") as string;
    const scope = data.get("scope") as string;

    // Get uploaded file
    const file = data.get("file") as File | null;

    // Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, Email and Phone are required",
        },
        { status: 400 }
      );
    }

    // File handling (optional for now)
    const fileUrl = "";

    if (file) {
      console.log("Uploaded File:", file.name);

      // Future:
      // Upload to cloudinary / aws / local storage
      // Then store returned URL in fileUrl
    }

    // Save to database
    const project = await prisma.contactDetails.create({
      data: {
        fullName,
        company,
        email,
        phone,
        service,
        scope,
        fileUrl,
      },
    });

    console.log("PROJECT SAVED:", project);

    return NextResponse.json({
      success: true,
      message: "Project submitted successfully",
      data: project,
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {

    const contacts = await prisma.contactDetails.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      contacts,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch contacts',
      },
      { status: 500 }
    );
  }
}