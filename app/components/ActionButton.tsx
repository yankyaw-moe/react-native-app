import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ActionButton({
  color,
  icon,
  label,
  path,
}: {
  color: string;
  icon: any;
  label: string;
  path?: any;
}) {
  return (
    <TouchableOpacity
      style={styles.action}
      onPress={() => {
        if (path) {
          router.navigate(path);
        }
      }}
    >
      <View
        style={[
          styles.actionButton,
          { backgroundColor: color ? color : "#7b48f4" },
        ]}
      >
        <MaterialIcons
          name={icon ? icon : "attach-money"}
          size={32}
          color="white"
        />
      </View>
      <Text style={styles.text}>{label ? label : "Label"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  action: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  actionButton: {
    width: 68,
    height: 68,
    borderRadius: 68,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
