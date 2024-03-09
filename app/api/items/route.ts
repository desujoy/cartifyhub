import { ShopItem } from "@/components/definitions/shop-items";
import { ShopItems } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(ShopItems as ShopItem[]);
}
