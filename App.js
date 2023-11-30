import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const PlaceHolderImage = require("./assets/code.jpeg");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer placeHolderImageSource={PlaceHolderImage} />
      <View style={styles.buttonContainer}>
        <Button label="Choose a photo" />
        <Button label="Take a photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1 / 2,
    alignItems: "center",
    marginTop: 20,
  },
});
