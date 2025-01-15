import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { HOST } from "../../../helpers/api";
import { removeFromCart, updateQuantity } from "../../../redux/cart/cartThunk";
import styles from "./item.style";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";
const Item = (props) => {
  const { data } = props;
  const [quantity, setQuantity] = useState(data.quantity);
  const [remove, setRemove] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(data.quantity);
  }, [data.quantity]);
  useEffect(() => {}, []);
  const increaseQuantity = async () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    if (data.productId) {
      try {
        await dispatch(
          updateQuantity({
            productId: data.productId,
            quantityChange: 1,
          })
        );
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    }
  };

  const decreaseQuantity = async () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      if (data.productId) {
        try {
          await dispatch(
            updateQuantity({
              productId: data.productId,
              quantityChange: -1,
            })
          );
        } catch (error) {
          console.error("Error updating quantity:", error);
        }
      }
    }
  };
  const handleDeleteItem = async () => {
    Alert.alert(
      "Remove Item",
      "Do you want to delete this item?",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(removeFromCart({ productId: data.productId }));
          },
        },
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteItem}>
        <Ionicons name="close" size={24} color="red" />
      </TouchableOpacity>
      <Image source={{ uri: `${HOST}/${data.image}` }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{data.name}</Text>
        <Text style={styles.itemInfo}>
          Color: {data.color}, Size: {data.size}
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
