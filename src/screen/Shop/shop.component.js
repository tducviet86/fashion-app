import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import styles from "./shop.style";
const CATEGORIES = [
  { id: "1", name: "Tops" },
  { id: "2", name: "Shirts & Blouses" },
  { id: "3", name: "Cardigans & Sweaters" },
  { id: "4", name: "Knitwear" },
  { id: "5", name: "Blazers" },
  { id: "6", name: "Outerwear" },
  { id: "7", name: "Pants" },
  { id: "8", name: "Jeans" },
  { id: "9", name: "Shorts" },
  { id: "10", name: "Skirts" },
  { id: "11", name: "Dresses" },
];
const Shop = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containerShop}>
        <Text style={styles.title}>Categories</Text>
      </View>
      <View style={styles.categories}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

export default Shop;
