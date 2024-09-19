import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import New from "../New/new.component";
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
      <View>
        <New />
      </View>
    </ScrollView>
  );
};
export default Main;
