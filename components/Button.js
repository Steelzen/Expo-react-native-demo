import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label }) {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onIncrement}>
        <Text style={styles.buttonLabel}>
          {label} {count}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "white",
    backgroundColor: "indigo",
    fontSize: 16,
  },
});
