export const runtime = "automatic";

import { ShopItem } from "@/components/definitions/shop-items";
import ItemDetails from "@/components/ui/ItemDetails";
import { ShopItems } from "@/lib/data";

interface PageProps {
  params: {
    id: ShopItem["id"];
  };
}

export default async function ItemPage({ params }: PageProps) {
  const { id } = params;
  const item = ShopItems.find((item) => item.id === Number(id));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ItemDetails item={item!} />
    </main>
  );
}
