import { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./product-details.style";
import { FontAwesome } from "@expo/vector-icons";
import { HOST } from "../../helpers/api";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../redux/cart/cartThunk";
import { addToCart } from "../../redux/cart/cartSlice";

const ProductDetails = (props) => {
  const {
    route: {
      params: { data },
    },
  } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAddToCart = async () => {
    try {
      const product = {
        productId: data.id,
        quantity: 1,
      };
      //api
      await dispatch(AddToCart(product));
      alert("Đã thêm sản phẩm thành công");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        // onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `${HOST}/${data.image}` }}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton}>
              <Text>Size</Text>
              <FontAwesome name="chevron-down" size={12} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text>Black</Text>
              <FontAwesome name="chevron-down" size={12} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.favoriteButton}>
              <FontAwesome name="heart-o" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.productName}>{data.name}</Text>
            <View style={styles.row}>
              <Text style={styles.brand}>{data.brand}</Text>
              <Text style={styles.price}>${data.price}</Text>
            </View>

            <Text style={styles.rating}>
              <FontAwesome name="star" size={16} color="orange" />{" "}
              <Text>{data.rating} (1000+ reviews)</Text>
            </Text>

            <Text style={styles.description}>
              Short dress in soft cotton jersey with decorative buttons down the
              front and a wide, frill-trimmed.
            </Text>
          </View>

          <View style={styles.infoLinks}>
            <TouchableOpacity style={styles.infoLink}>
              <Text>Shipping Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoLink}>
              <Text>Support</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.addToCartButton]}>
        <PrimaryButton onPress={handleAddToCart}>Add To Cart</PrimaryButton>
      </View>
      <TouchableOpacity
        hitSlop={10}
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={26} color="#495057" />
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;
