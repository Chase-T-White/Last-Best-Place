import { NextResponse } from "next/server";
import beers from "./beers.json";

export async function GET(request) {
  return NextResponse.json(beers);
}
