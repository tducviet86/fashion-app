import { View, Image, Text, SafeAreaView, FlatList } from "react-native";
import SAMPLE_DATA from "../../../data.sample";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import styles from "./main.style";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.containerImage}>
          <Image
            source={require("../../../assets/Image/main-fashion.jpeg")}
            style={styles.imageFashion}
          />
          <View style={styles.titleFashion}>
            <Text style={styles.title}>Fashion </Text>
            <Text style={styles.title}>sale </Text>
            <PrimaryButton style={styles.button}>Check</PrimaryButton>
          </View>
        </View>
      </View>
      <View>
        <FlatList data={SAMPLE_DATA} renderItem={{}} />
      </View>
    </SafeAreaView>
  );
};
export default Main;
