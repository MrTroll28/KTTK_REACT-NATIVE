import { Pressable, Text, StyleSheet } from "react-native";

export default function CalButton({label, onPress}) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#ccc",
    margin: 5
  },
});