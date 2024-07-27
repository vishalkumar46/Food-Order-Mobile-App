import { FlatList, Pressable } from "react-native";
import products from "../../../../assets/data/products";
import { ProductItem } from "@/src/components/ProductItem";

export default function MenuList() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem product={item} />}
      keyExtractor={(item: any) => item.id}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
      numColumns={2}
    />
  );
}
