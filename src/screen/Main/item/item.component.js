import { View, Image, Text } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import styles from "./item.style";

const Item = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <StarRatingDisplay style={styles.rating} starSize={23} rating={4.5} />
      <View style={styles.item}>
        <Text style={styles.brand}>{data.brand}</Text>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>{data.price}$</Text>
      </View>
    </View>
  );
};
export default Item;
