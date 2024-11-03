import { View, Image, Text, TouchableOpacity } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import styles from "./item.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HOST } from "../../../helpers/api";
import { useNavigation } from "@react-navigation/native";

const Item = (props) => {
  const navigation = useNavigation();
  const { data } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("product", {
          screen: "product-details",
          params: { data },
        })
      }
    >
      <View style={styles.newImage}>
        <Image style={styles.image} source={{ uri: `${HOST}/${data.image}` }} />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>New</Text>
        </View>
      </View>
      <View style={styles.rating}>
        <StarRatingDisplay
          style={styles.rating}
          starSize={24}
          rating={data.rating}
        />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.brand}>{data.brand}</Text>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>{data.price}$</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Item;
