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
  newSection: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    backgroundColor: "#fff",
  },
  new: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newTitle: {
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 34,
    color: "#000",
  },
  newDescription: { color: "#b0b0b0" },
  viewAll: {
    color: "#e74c3c",
    fontSize: 16,
  },
});

export default styles;
