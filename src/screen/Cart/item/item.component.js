import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { HOST } from "../../../helpers/api";
import { updateQuantity } from "../../../redux/cart/cartThunk";

import styles from "./item.style";

const Item = (props) => {
  const { data } = props;
  const [quantity, setQuantity] = useState(data.quantity);
  const dispatch = useDispatch();
  useEffect(() => {
    setQuantity(data.quantity);
  }, [data.quantity]);

  const increaseQuantity = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    if (data.productId) {
      try {
        await dispatch(
          updateQuantity({ productId: data.productId, quantity: newQuantity })
        );
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    }
  };

  const decreaseQuantity = async () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);

    if (data.productId) {
      try {
        await dispatch(
          updateQuantity({ productId: data.productId, quantity: newQuantity })
        );
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    }
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
