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
import { useEffect, useState } from "react";
import {
  getSubCategoryByCategory,
  getProductsByCategory,
  getSubCategory,
} from "../../redux/category/category.thunk";
import Item from "./item/item.component";

const Category = (props) => {
  const {
    route: {
      params: { data },
    },
  } = props;
  const { loading, list, category } = useSelector((state) => state.category);
  console.log("Redux state - list: ", list);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory(data.id));
    dispatch(getSubCategoryByCategory(data.id));
  }, []);

  const subCategory = ({ item }) => (
    <View>
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => dispatch(getSubCategory(item.id))}
      >
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
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
      <View style={styles.subCategory}>
        <FlatList
          data={category}
          renderItem={subCategory}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.toolbarContainer}>
          <TouchableOpacity
            style={styles.toolbarButton}
            onPress={() => navigation.navigate("filter")}
          >
            <Ionicons name="filter-outline" size={24} color={"#495057"} />
            <Text style={styles.toolbarText}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Ionicons name="arrow-down-outline" size={24} color={"#495057"} />
            <Text style={styles.toolbarText}>Price: lowest to high</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Ionicons name="list-sharp" size={24} color="#495057" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={list}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
          />
        )}
      </View>
    </View>
  );
};

export default Category;
