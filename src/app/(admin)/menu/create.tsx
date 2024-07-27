import Button from "@/src/components/Button";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
export default function Create() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const { id } = useLocalSearchParams();
  const isUpdate = !!id;
  const addItemHandle = () => {
    if (!vaildate()) return;
    console.log("name", name);
  };

  const onDeleteItem = () => {
    console.log("deleted item");
  };

  const isdeleted = () => {
    Alert.alert("Confirm", "Are you sure to delete?", [
      {
        text: "cancel",
      },
      {
        text: "confirm",
        style: "destructive",
        onPress: onDeleteItem,
      },
    ]);
  };

  const updateItemHandle = () => {
    if (!vaildate()) return;
    console.log("updated");
  };

  const reset = () => {
    setName("");
    setPrice("");
  };

  const vaildate = () => {
    reset();
    if (!name) {
      setError("name is required !");
      return false;
    }
    if (!price) {
      setError("price is required !");
      return false;
    }

    if (isNaN(parseInt(price))) {
      setError("price should be number");
      return false;
    }

    return true;
  };
  return (
    <View style={styles.constainer}>
      <Text style={styles.label}> Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}> $ Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Price"
        onChangeText={setPrice}
        keyboardType="numeric"
        value={price}
      />
      <Text style={{ color: "red" }}>{error}</Text>
      <Button
        text={isUpdate ? "Update Item" : "Add Item"}
        cartAction={isUpdate ? updateItemHandle : addItemHandle}
      />
      <Text
        style={{ color: "red", fontSize: 20, alignItems: "center" }}
        onPress={isdeleted}
      >
        Delete
      </Text>
      <Stack.Screen
        options={{
          headerTitle: isUpdate ? "update pizza" : "create new Pizza",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "#fff",
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
  },
});
