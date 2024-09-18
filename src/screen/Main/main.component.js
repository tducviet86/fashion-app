import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import SAMPLE_DATA from "../../../data.sample";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import Item from "./item/item.component";
import styles from "./main.style";

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../../../assets/Image/main.jpg")}
          style={styles.imageFashion}
        />
        <View style={styles.titleFashion}>
          <Text style={styles.title}>Fashion </Text>
          <Text style={[styles.title, { marginBottom: 20 }]}>sale </Text>
          <PrimaryButton style={styles.button}>Check</PrimaryButton>
        </View>
      </View>
      <View style={styles.newSection}>
        <View style={styles.new}>
          <View>
            <Text style={styles.newTitle}>New</Text>
            <Text style={styles.newDescription}>
              You've never seen it before!
            </Text>
          </View>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <FlatList
          data={SAMPLE_DATA}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true} // chỉnh cuộn dọc thành ngang
          showsHorizontalScrollIndicator={false} // ẩn cột scroll ở cuộn ngang
        />
      </View>
    </ScrollView>
  );
};
export default Main;
