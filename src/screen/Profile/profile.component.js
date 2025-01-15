import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./profile.style";
import PrimaryButton from "../../component/primary-button/primary-button.component";

const Profile = () => {
  const profileOptions = [
    { title: "My orders", subtitle: "Already have 12 orders", route: "Orders" },
    {
      title: "Shipping addresses",
      subtitle: "3 addresses",
      route: "ShippingAddresses",
    },
    {
      title: "Payment methods",
      subtitle: "Visa **34",
      route: "PaymentMethods",
    },
    {
      title: "Promocodes",
      subtitle: "You have special promocodes",
      route: "Promocodes",
    },
    { title: "My reviews", subtitle: "Reviews for 4 items", route: "Reviews" },
    {
      title: "Settings",
      subtitle: "Notifications, password",
      route: "Settings",
    },
  ];

  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.optionContainer}>
      <View>
        <Text style={styles.optionTitle}>{item.title}</Text>
        <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
      </View>
      <Text style={styles.arrow}>{">"}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Tran Duc Viet</Text>
          <Text style={styles.profileEmail}>tranducvietdtu@mail.com</Text>
        </View>
      </View>
      <FlatList
        data={profileOptions}
        keyExtractor={(item) => item.title}
        renderItem={renderOption}
        contentContainerStyle={styles.optionsList}
      />
      <PrimaryButton>Log out</PrimaryButton>
    </SafeAreaView>
  );
};

export default Profile;
