import Button from "../components/Button";
import { router } from "expo-router";
export default function Page() {
  return (
    <>
      <Button text="User" cartAction={() => router.push("/(user)/menu")} />
      <Button text="Admin" cartAction={() => router.push("/(admin)/menu")} />
    </>
  );
}
