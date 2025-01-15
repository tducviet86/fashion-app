import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    marginRight: 16,
  },
  backText: {
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: "#777",
  },
  changeButton: {
    color: "#FF5733",
    fontSize: 14,
    fontWeight: "bold",
  },
  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paymentIcon: {
    width: 40,
    height: 24,
  },
  cardNumber: {
    fontSize: 16,
    flex: 1,
    marginLeft: 12,
  },
  deliveryMethods: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  deliveryOption: {
    alignItems: "center",
  },
  deliveryLogo: {
    width: 50,
    height: 30,
    resizeMode: "contain",
  },
  deliveryText: {
    marginTop: 8,
    fontSize: 14,
    color: "#777",
  },
  summarySection: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    marginTop: 8,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#777",
  },
  summaryValue: {
    fontSize: 16,
  },
  summaryTotal: {
    fontSize: 18,
    fontWeight: "bold",
  },
  submitButton: {
    borderRadius: 5,
    marginBottom: 20,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
export default styles;
