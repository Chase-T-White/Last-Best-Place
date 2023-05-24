import { NextResponse } from "next/server";
import faqs from "./faq.json";

export async function GET(request) {
  return NextResponse.json(faqs);
}
