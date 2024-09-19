import { View, Image, Text, TouchableOpacity } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import styles from "./item.style";
import Ionicons from "@expo/vector-icons/Ionicons";

const Item = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.newImage}>
        <Image style={styles.image} source={{ uri: data.image }} />
        <Text style={styles.label}>Sale</Text>
        <TouchableOpacity style={styles.favorites}>
          <Ionicons
            name="heart-outline"
            size={24}
            color="rgba(218, 218, 218, 1)"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rating}>
        <StarRatingDisplay style={styles.rating} starSize={24} rating={4.8} />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.brand}>{data.brand}</Text>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>{data.price}$</Text>
      </View>
    </View>
  );
};
export default Item;
