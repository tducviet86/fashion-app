import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainImage: {
    width: "100%",
    height: 500,
    borderRadius: 10,
  },

  detailsContainer: {
    marginTop: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  brand: {
    fontSize: 18,
    color: "#9B9B9B",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: "#222222",
    marginTop: 8,
  },
  containerInfo: {
    padding: 16,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 110,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  favoriteButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    padding: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    marginTop: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoLinks: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingTop: 10,
  },
  infoLink: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  closeButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    position: "absolute",
    top: 35,
    left: 25,
    elevation: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignContent: "center",
  },
  // sectionTitle: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   marginTop: 20,
  // },
  // similarItem: {
  //   marginRight: 10,
  //   width: 120,
  // },
  // similarImage: {
  //   width: "100%",
  //   height: 150,
  //   borderRadius: 10,
  // },
  // similarName: {
  //   fontSize: 14,
  //   marginTop: 5,
  // },
  // similarPrice: {
  //   fontSize: 14,
  //   fontWeight: "bold",
  //   marginTop: 5,
  // },
});
export default styles;
