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
        <View style={styles.labelContainer}>
          <Text style={styles.label}>New</Text>
        </View>
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
