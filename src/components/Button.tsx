import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

type ButtonProps = {
  text: string;
  cartAction: () => void;
};
const Button = ({ text, cartAction }: ButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={cartAction}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
