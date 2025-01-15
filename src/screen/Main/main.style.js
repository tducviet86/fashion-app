import { StyleSheet, Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
// Nó cập nhật kick thước khi thay đổi
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageFashion: {
    width: screenWidth * 1.15,
    height: 260,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    // height: screenHeight * 0.9,
  },
  title: {
    position: "absolute",
    bottom: 35,
    left: 60,
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "800",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#e74c3c",
  },
});

export default styles;
