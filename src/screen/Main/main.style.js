import { StyleSheet } from "react-native";

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
  },
  titleFashion: {
    position: "absolute",
    bottom: 100,
    left: 20,
    justifyContent: "flex-end",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "900",
    textAlign: "left",
  },
  button: {
    marginTop: 30,
  },
});

export default styles;
