import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./sale.style";
import SAMPLE_DATA from "../../../data.sample";
import Item from "./item/item.component";
const Sale = () => (
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

    <FlatList
      data={SAMPLE_DATA}
      renderItem={({ item }) => <Item data={item} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true} // chỉnh cuộn dọc thành ngang
      showsHorizontalScrollIndicator={false} // ẩn cột scroll ở cuộn ngang
    />
  </View>
);
export default Sale;
