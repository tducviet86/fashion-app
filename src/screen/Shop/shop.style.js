import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerShop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "rgba(249, 249, 249, 1)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderColor: "rgba(219, 48, 34, 1)",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#495057", // Màu chữ cho tab chưa chọn
  },
  activeTabText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
  },
});
export default styles;
