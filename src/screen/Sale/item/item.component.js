import { View, Image, Text, TouchableOpacity } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import styles from "./item.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HOST } from "../../../helpers/api";
const Item = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.newImage}>
        <Image style={styles.image} source={{ uri: `${HOST}/${data.image}` }} />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>-{data.discount * 100}%</Text>
        </View>
      </View>
      <View style={styles.rating}>
        <StarRatingDisplay style={styles.rating} starSize={24} rating={4.8} />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.brand}>{data.brand}</Text>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.infoPrice}>
          <Text style={styles.priceDiscount}>{data.price}$</Text>
          <Text style={styles.price}>
            {data.price - (data.price * data.discount * 100) / 100}$
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Item;
