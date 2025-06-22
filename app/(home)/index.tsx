import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.banner}>
      <Text style={styles.link} onPress={() => router.navigate("/about")}>
        About Us
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#ddd",
    borderRadius: 10,
    margin: 20,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#58f",
    fontWeight: "bold",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
