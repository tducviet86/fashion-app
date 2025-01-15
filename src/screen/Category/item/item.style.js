import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 15,
  },
  image: {
    width: 184,
    height: 250,
    borderRadius: 20,
  },
  newImage: {
    position: "relative",
  },
  labelContainer: {
    position: "absolute",
    top: 20,
    left: 10,
    backgroundColor: "#e74c3c",
    borderRadius: 20,
    zIndex: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  label: {
    color: "#fff",
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
  infoPrice: {
    flexDirection: "row",
  },
  priceDiscount: {
    marginRight: 8,
    color: "gray",
    fontWeight: "500",
    fontSize: 18,
    textDecorationLine: "line-through",
  },
  price: {
    color: "#ff0000",
    fontWeight: "500",
    fontSize: 18,
  },
});
export default styles;
