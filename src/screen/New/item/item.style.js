import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginRight: 30,
  },
  image: {
    width: 184,
    height: 250,
    borderRadius: 20,
  },
  newImage: {
    position: "relative",
  },
  label: {
    position: "absolute",
    top: 20,
    left: 10,
    color: "#fff",
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    zIndex: 10,
    fontSize: 12,
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
  },
  infoBox: {
    paddingHorizontal: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  brand: {
    fontSize: 14,
    lineHeight: 14,
    color: "rgba(155, 155, 155, 1)",
  },
  title: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: "600",
  },
  price: {
    color: "#ff0000",
    fontWeight: "500",
  },
});
export default styles;
