import { Text, TouchableOpacity } from "react-native";
import styles from "./primary-button.style";

const PrimaryButton = ({ children }) => (
  <TouchableOpacity style={styles.container}>
    {typeof children === "string" ? (
      <Text style={styles.text}>{children}</Text>
    ) : (
      { children }
    )}
  </TouchableOpacity>
);
export default PrimaryButton;
