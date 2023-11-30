import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeHolderImageSource }) {
  return <Image source={placeHolderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    borderRadius: 10,
  },
});
