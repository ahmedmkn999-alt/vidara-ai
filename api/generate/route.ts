import { NextResponse } from "next/server";
import Replicate from "replicate";

// التأكد من وجود التوكن لتجنب انهيار السيرفر
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, image_url } = body;

    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json({ error: "API Token missing" }, { status: 500 });
    }

    // تشغيل موديل الفيديو (Luma Dream Machine)
    const output = await replicate.run(
      "lucataco/luma-dream-machine",
      {
        input: {
          prompt: prompt,
          image_url: image_url
        }
      }
    );

    return NextResponse.json({ success: true, video: output });
  } catch (error: any) {
    console.error("Replicate Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
