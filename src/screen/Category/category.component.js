import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./category.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const Category = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containerShop}>
        <TouchableOpacity hitSlop={10} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={"#495057"} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Categories</Text>
        </View>
        <TouchableOpacity hitSlop={10}>
          <Ionicons name="search-outline" size={30} color={"#495057"} />
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

export default Category;
