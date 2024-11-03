import { View, Image, Text, TouchableOpacity } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import styles from "./item.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HOST } from "../../../helpers/api";
import { useNavigation } from "@react-navigation/native";
const Item = (props) => {
  const { data } = props;
  const navigation = useNavigation();
  return (
    <>
      {data.discount > 0 ? (
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate("product-details", { data })}
        >
          <View style={styles.newImage}>
            <Image
              style={styles.image}
              source={{ uri: `${HOST}/${data.image}` }}
            />
            <View style={styles.labelContainer}>
              <Text style={styles.label}>-{data.discount * 100}%</Text>
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
            <View style={styles.infoPrice}>
              <Text style={styles.priceDiscount}>{data.price}$</Text>
              <Text style={styles.price}>
                {data.price - (data.price * data.discount * 100) / 100}$
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate("product-details", { data })}
        >
          <View style={styles.newImage}>
            <Image
              style={styles.image}
              source={{ uri: `${HOST}/${data.image}` }}
            />
            {/* <View style={styles.labelContainer}>
          <Text style={styles.label}>-{data.discount * 100}%</Text>
        </View> */}
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
      )}
    </>
  );
};
export default Item;
