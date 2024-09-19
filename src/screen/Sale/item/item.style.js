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
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#fff",
    // borderWidth: 1,
    backgroundColor: "#e74c3c",
    zIndex: 10,
    fontSize: 12,
    // fontSize: 12,
    borderRadius: 15,
    fontWeight: "900",
    textAlign: "center",
  },
  favorites: {
    position: "absolute",
    bottom: -22,
    right: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // borderWidth: 1,
    backgroundColor: "#fff",
    shadowColor: "#212529",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 6,
    borderRadius: 30,
    zIndex: 10,
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
