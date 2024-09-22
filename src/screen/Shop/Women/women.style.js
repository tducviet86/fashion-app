import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  bannerContainer: {
    padding: 10,
    alignItems: "center",
  },
  banner: {
    backgroundColor: "#e74c3c",
    width: screenWidth * 0.9,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  bannerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  bannerSubText: {
    fontSize: 16,
    color: "#fff",
  },
  categoryItem: {
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  categoryImage: {
    width: 200,
    height: 120,
    resizeMode: "cover",
    marginLeft: 16,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default styles;
