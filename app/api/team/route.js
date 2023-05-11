import { NextResponse } from "next/server";
import teamMembers from "./team.json";

export async function GET(request) {
  return NextResponse.json(teamMembers);
}
