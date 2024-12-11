import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./item.style";
import { HOST } from "../../../helpers/api";

const Item = (props) => {
  const { data } = props;
  const [quantity, setQuantity] = useState(data.quantity);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: `${HOST}/${data.image}` }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{data.name}</Text>
        <Text style={styles.itemInfo}>
          Color: {data.color} Size: {data.size}
        </Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.price}>${data.price * quantity}</Text>
    </View>
  );
};

export default Item;
