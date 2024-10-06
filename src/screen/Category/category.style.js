import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerShop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "rgba(249, 249, 249, 1)",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  categories: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  subCategory: {
    backgroundColor: "#fff",
  },
  categoryItem: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 10,
  },
  item: {
    color: "#fff",
  },
  toolbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  toolbarButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  toolbarText: {
    marginLeft: 5,
    color: "#495057",
  },
});
export default styles;
