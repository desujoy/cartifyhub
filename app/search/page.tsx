import { searchItems } from "@/components/utils/search";
import { ShopItem } from "@/components/definitions/shop-items";
import ItemList from "@/components/ui/ItemList";

export async function getServerSideProps({ query }: { query: { search: string } }) {
  const items: ShopItem[] = await searchItems(query.search);
  return {
    props: {
      items,
    },
  };
}

export default async function SearchPage({ items }: { items: ShopItem[] }) {

    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ItemList items={items} />
    </main>
  );
}
