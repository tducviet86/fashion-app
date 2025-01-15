import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import New from "../New/new.component";
import Sale from "../Sale/sale.component";
import styles from "./main.style";

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImage}>
        <ImageBackground
          source={require("../../../assets/Image/home.jpeg")}
          style={styles.imageFashion}
        >
          <Text style={styles.title}>Street clothes </Text>
        </ImageBackground>
      </View>
      <View style={{ backgroundColor: "rgba(249, 249, 249, 1)" }}>
        <New />
        <Sale />
      </View>
    </ScrollView>
  );
};
export default Main;
