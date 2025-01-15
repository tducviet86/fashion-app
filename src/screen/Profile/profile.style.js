import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    marginLeft: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
  },
  optionsList: {
    marginTop: 10,
    marginLeft: 20,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  optionSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
  arrow: {
    fontSize: 18,
    color: "#ccc",
  },
});
export default styles;
