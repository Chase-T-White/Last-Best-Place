import { NextResponse } from "next/server";
import events from "./events.json";

export async function GET(request) {
  return NextResponse.json(events);
}
