import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./sale.style";
import SAMPLE_DATA from "../../../data.sample";
import Item from "./item/item.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductBySaleThunk } from "../../redux/home/home.thunk";
const Sale = () => {
  const list = useSelector((state) => state.home.list.sale);
  const loading = useSelector((state) => state.home.loading.sale);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductBySaleThunk("sale"));
  }, []);
  return (
    <View style={styles.newSection}>
      <View style={styles.new}>
        <View>
          <Text style={styles.newTitle}>Sale</Text>
          <Text style={styles.newDescription}>Super summer sale</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={list}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true} // chỉnh cuộn dọc thành ngang
          showsHorizontalScrollIndicator={false} // ẩn cột scroll ở cuộn ngang
        />
      )}
    </View>
  );
};
export default Sale;
