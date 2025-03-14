import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import Item from "./item/item.component";
import styles from "./cart.style";
import WithAuth from "../../middlewares/withAuth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getCart } from "../../redux/cart/cartThunk";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const { list } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCart());
    };
    fetchData();
  }, [dispatch]);

  const totalItem = useMemo(() => {
    return (
      list?.reduce((total, item) => total + item.price * item.quantity, 0) || 0
    );
  }, [list]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containerBag}>
        <Text style={styles.title}>My Bag</Text>
      </View>
      <FlatList
        data={list}
        renderItem={({ item }) => (item ? <Item data={item} /> : null)}
        keyExtractor={(item) =>
          item?.id?.toString() || item?.productId?.toString()
        }
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total amount:</Text>
        <Text style={styles.totalAmount}>${totalItem}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate("checkout", { total: totalItem })}
      >
        <Text style={styles.checkoutButtonText}>CHECK OUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WithAuth(Cart);
