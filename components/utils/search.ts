import { ShopItems } from "@/lib/data";

export function searchItems(query: string) {
  return ShopItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}
