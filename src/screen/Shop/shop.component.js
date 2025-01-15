import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./shop.style";
import { getCategories } from "../../redux/shop/shop.thunk";
import Item from "./item/item.component";

const Shop = () => {
  const { loading, category } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containerShop}>
        <Text style={styles.title}>Categories</Text>
      </View>
      <View style={styles.categories}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={category}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default Shop;
