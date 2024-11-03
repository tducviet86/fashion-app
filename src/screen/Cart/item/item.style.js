import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: "bold" },
  itemInfo: { fontSize: 14, color: "#888", marginVertical: 4 },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  quantityButton: { fontSize: 20, color: "#333", paddingHorizontal: 10 },
  quantityText: { fontSize: 16, paddingHorizontal: 8 },
  price: { fontSize: 16, fontWeight: "bold", color: "#333" },
});
export default styles;
