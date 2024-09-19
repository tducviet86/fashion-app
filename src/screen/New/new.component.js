import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./new.style";
import SAMPLE_DATA from "../../../data.sample";
import Item from "./item/item.component";
const New = () => (
  <View style={styles.newSection}>
    <View style={styles.new}>
      <View>
        <Text style={styles.newTitle}>New</Text>
        <Text style={styles.newDescription}>You've never seen it before!</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.viewAll}>View all</Text>
      </TouchableOpacity>
    </View>

    <FlatList
      data={SAMPLE_DATA}
      renderItem={({ item }) => <Item data={item} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true} // chỉnh cuộn dọc thành ngang
      showsHorizontalScrollIndicator={false} // ẩn cột scroll ở cuộn ngang
    />
  </View>
);
export default New;
