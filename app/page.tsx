import { ShopItem } from "@/components/definitions/shop-items";
import ItemList from "@/components/ui/ItemList";
import { ShopItems } from "@/lib/data";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ItemList items={ShopItems} />
    </main>
  );
}
