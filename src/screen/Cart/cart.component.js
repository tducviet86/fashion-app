import React from "react";
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
import { useEffect } from "react";
import { getCart } from "../../redux/cart/cartThunk";

const Cart = () => {
  const { list } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCart());
    };

    fetchData();
  }, []);

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
          item?.id?.toString() || Math.random().toString()
        }
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total amount:</Text>
        <Text style={styles.totalAmount}>$124</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>CHECK OUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WithAuth(Cart);
