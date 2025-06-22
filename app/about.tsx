import { Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>About Us</Text>
    </View>
  );
}
