import { Text, Platform, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../components/CartProvider";
import CartListItem from "@components/CartListItem";
import Button from "@components/Button";
const Cart = () => {
  const { items, total } = useCart();

  if (!items) return <Text>No Item Added</Text>;
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10, padding: 2 }}
      />
      <Text style={{ marginTop: "auto", fontSize: 20, fontWeight: 600 }}>
        Total Amount: {total}
      </Text>
      <Button text="Place Order" cartAction={() => {}} />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default Cart;
