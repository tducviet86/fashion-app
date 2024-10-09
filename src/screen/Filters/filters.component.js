import styles from "./filters.style";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Filter = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerShop}>
        <TouchableOpacity hitSlop={10} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={"#495057"} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Filter</Text>
        </View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};
export default Filter;
