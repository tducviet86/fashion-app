import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./success.style";
const Success = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2331/2331940.png",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>Success!</Text>

      <Text style={styles.message}>
        Your order will be delivered soon.{"\n"}Thank you for choosing our app!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("main")}
      >
        <Text style={styles.buttonText}>CONTINUE SHOPPING</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;
