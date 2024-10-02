import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, TouchableOpacity, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./shop.style";
import {
  getProductByCategory,
  getProductToShop,
} from "../../redux/shop/shop.thunk";

const Shop = () => {
  const navigation = useNavigation();
  const listShop = useSelector((state) => state.shop.listCategory);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductByCategory());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getProductToShop());
  }, [dispatch]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => navigation.navigate("category")}
      >
        <Text style={styles.categoryText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containerShop}>
        <Text style={styles.title}>Categories</Text>
      </View>
      <View style={styles.categories}>
        <FlatList
          data={listShop}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

export default Shop;
