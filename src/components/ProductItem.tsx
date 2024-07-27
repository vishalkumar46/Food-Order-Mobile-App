import { Text, Image, StyleSheet, Pressable } from "react-native";
import { Product } from "../../assets/types";
import { Link, useSegments } from "expo-router";

type ProductItemProps = {
  product: Product;
};
export const ProductItem = ({ product }: ProductItemProps) => {
  const segment = useSegments();
  return (
    <Link href={`/${segment[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={{ uri: product.image ?? "" }}
          resizeMode="contain"
        />
        <Text style={styles.header}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    color: "2f95dc",
    fontWeight: "bold",
  },
});
