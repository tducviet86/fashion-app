import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./item.style";
import { HOST } from "../../../helpers/api";

const Item = (props) => {
  const { data } = props;
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: `${HOST}/${data.image}` }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{data.name}</Text>
        <Text style={styles.itemInfo}>
          Color: {data.color} Size: {data.size}
        </Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{data.quantity}</Text>
          <TouchableOpacity>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.price}>${data.price * data.quantity}</Text>
    </View>
  );
};

export default Item;
