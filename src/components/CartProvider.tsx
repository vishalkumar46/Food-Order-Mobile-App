import { CartItem, Product } from "@/assets/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (item: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemid: string, quantity: -1 | 1) => void;
  total: number;
};
const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Product, size: CartItem["size"]) => {
    const exisitingProduct = items.find(
      (order) => order.product === item && order.size == size
    );
    if (exisitingProduct) {
      updateQuantity(exisitingProduct.id, 1);
      return;
    }
    const newCart = {
      id: randomUUID(),
      product: item,
      product_id: item.id,
      size: size,
      quantity: 1,
    };
    setItems([newCart, ...items]);
  };
  const updateQuantity = (addedItemID: string, quantity: -1 | 1) => {
    setItems(
      items
        .map((item) =>
          item.id !== addedItemID
            ? item
            : { ...item, quantity: item.quantity + quantity }
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const total = items.reduce(
    (acc, sum) => (acc += sum.product.price * sum.quantity),
    0
  );
  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
