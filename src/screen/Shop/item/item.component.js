import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../../redux/category/category.slice";

import styles from "./item.style";
const Item = (props) => {
  const { data, id } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        dispatch(resetFilter());
        navigation.navigate("category", { data });
      }}
    >
      <Text style={styles.categoryText}>{data.name}</Text>
    </TouchableOpacity>
  );
};
//
export default Item;
