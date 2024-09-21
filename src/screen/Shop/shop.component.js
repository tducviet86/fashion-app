import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./shop.style";

// import { Container } from './styles';

const Shop = () => {
  return (
    <View>
      <StatusBar style="dark" />
      <View style={styles.containerShop}>
        <TouchableOpacity hitSlop={10}>
          <Ionicons name="chevron-back" size={30} color={"#495057"} />
        </TouchableOpacity>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity hitSlop={10}>
          <Ionicons name="search-outline" size={30} color={"#495057"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shop;
