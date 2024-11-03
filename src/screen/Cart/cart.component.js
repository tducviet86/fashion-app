import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import Item from "./item/item.component";
import styles from "./cart.style";

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containerBag}>
        <Text style={styles.title}>My Bag</Text>
      </View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
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

export default Cart;
