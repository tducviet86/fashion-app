import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { dataWomen } from "../../../../data.sample";
import styles from "./kids.style";
// import { Container } from './styles';

const Kids = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>SUMMER SALES</Text>
          <Text style={styles.bannerSubText}>Up to 50% off</Text>
        </View>
      </View>
      <FlatList
        data={dataWomen}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.textContainer}>
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
            <Image source={item.image} style={styles.categoryImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Kids;
