import { View, Image, Text } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import styles from "./item.style";

const Item = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.newImage}>
        <Image style={styles.image} source={{ uri: data.image }} />
        <Text style={styles.label}>NEW</Text>
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
