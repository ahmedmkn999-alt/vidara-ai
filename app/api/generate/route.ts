import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
});

export async function POST(req: Request) {
  try {
    const { prompt, image_url } = await req.json();

    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json({ error: "API Token missing" }, { status: 500 });
    }

    const output = await replicate.run(
      "lucataco/luma-dream-machine",
      { input: { prompt, image_url } }
    );

    return NextResponse.json({ success: true, video: output });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
