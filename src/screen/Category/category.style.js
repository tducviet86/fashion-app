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
});
export default styles;
