import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./category.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsToCategory } from "../../redux/shop/shop.thunk";
import Item from "./item/item.component";
const Category = (props) => {
  const {
    route: {
      params: { data },
    },
  } = props;
  const { loading, list } = useSelector((state) => state.shop);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.id) {
      dispatch(getProductsToCategory(data.id));
    }
  }, [dispatch, data.id]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containerShop}>
        <TouchableOpacity hitSlop={10} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={"#495057"} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{data.name}</Text>
        </View>
        <TouchableOpacity hitSlop={10}>
          <Ionicons name="search-outline" size={30} color={"#495057"} />
        </TouchableOpacity>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={list}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // Specify the number of columns
            columnWrapperStyle={styles.columnWrapper} // Optional: add styles for columns
          />
        )}
      </View>
    </View>
  );
};

export default Category;
