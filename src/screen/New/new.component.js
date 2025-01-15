import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./new.style";
import SAMPLE_DATA from "../../../data.sample";
import Item from "./item/item.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  // fetchProductThunk,
  getProductByNewThunk,
} from "../../redux/home/home.thunk";
const New = () => {
  const list = useSelector((state) => state.home.list.new);
  const loading = useSelector((state) => state.home.loading.new);
  const dispatch = useDispatch();
  // them hieu loading
  useEffect(() => {
    dispatch(getProductByNewThunk("new"));
  }, [dispatch]);

  return (
    <View style={styles.newSection}>
      <View style={styles.new}>
        <View>
          <Text style={styles.newTitle}>New</Text>
          <Text style={styles.newDescription}>
            You've never seen it before!
          </Text>
        </View>
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
export default New;
