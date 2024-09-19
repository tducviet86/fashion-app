import { StyleSheet, Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("window");
// Nó cập nhật kick thước khi thay đổi
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageFashion: {
    width: 439,
    height: 628,
  },
  containerImage: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight * 0.6,
  },
  titleFashion: {
    position: "absolute",
    bottom: 35,
    left: 20,
    justifyContent: "flex-end",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "800",
    textAlign: "left",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#e74c3c",
  },
});

export default styles;
