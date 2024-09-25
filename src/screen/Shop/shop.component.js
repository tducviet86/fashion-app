import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./shop.style";
const Shop = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containerShop}>
        <Text style={styles.title}>Categories</Text>
      </View>
    </View>
  );
};

export default Shop;
