import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Tí Đù" },
    { id: 2, name: "Báo Thủ" },
  ]);
}
