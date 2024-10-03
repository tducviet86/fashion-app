import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

import styles from "./item.style";
const Item = (props) => {
  const { data, id } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate("category", { data })}
    >
      <Text style={styles.categoryText}>{data.name}</Text>
    </TouchableOpacity>
  );
};
//
export default Item;
