import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Stack, useLocalSearchParams, useRouter, Link } from "expo-router";
import products from "../../../../assets/data/products";
import { useState } from "react";
import Button from "@components/Button";
import { useCart } from "@/src/components/CartProvider";
import { PizzaSize } from "@/assets/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SelectedProduct() {
  const { id } = useLocalSearchParams();
  const product = products.find((item) => item.id.toString() === id);
  const [selectedItem, setSelectedItem] = useState<PizzaSize>("M");
  const { addItem } = useCart();
  const router = useRouter();
  if (!product) return <Text>Item Not Found</Text>;

  const addtoCartHandle = () => {
    if (!product) return;
    addItem(product, selectedItem);
    router.push("/cart/");
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={"#2f95dc"}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen options={{ title: product.name }} />
      <Image style={styles.imageContainer} source={{ uri: product.image }} />
      <Text style={styles.price}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to cart" cartAction={addtoCartHandle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1 },
  price: {
    color: "20",
    fontWeight: "600",
    fontSize: 24,
    marginTop: "auto",
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    padding: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  itemSize: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 20,
  },
});
