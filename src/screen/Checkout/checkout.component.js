import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import styles from "./checkout.style";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
const Checkout = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const total = route.params?.total ?? 0;
  const data = useSelector((state) => state.cart.list);
  const clearCart = () => {};
  console.log(data);

  let ship = 15;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Checkout</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping address</Text>
          <View style={styles.addressContainer}>
            <View>
              <Text style={styles.name}>Tran Duc Viet</Text>
              <Text style={styles.address}>40 Dang Nhu Mai</Text>
              <Text style={styles.address}>Hoa An, Cam Le, Da Nang</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeButton}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment</Text>
          <View style={styles.paymentContainer}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png",
              }}
              style={styles.paymentIcon}
            />
            <Text style={styles.cardNumber}>**** **** **** 3947</Text>
            <TouchableOpacity>
              <Text style={styles.changeButton}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery method</Text>
          <View style={styles.deliveryMethods}>
            <TouchableOpacity style={styles.deliveryOption}>
              <Image
                source={{
                  uri: "https://logos-world.net/wp-content/uploads/2020/04/FedEx-Logo.png",
                }}
                style={styles.deliveryLogo}
              />
              <Text style={styles.deliveryText}>2-3 days</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deliveryOption}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/USPS_logo.svg/2560px-USPS_logo.svg.png",
                }}
                style={styles.deliveryLogo}
              />
              <Text style={styles.deliveryText}>2-3 days</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deliveryOption}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/DHL_Logo.svg/2560px-DHL_Logo.svg.png",
                }}
                style={styles.deliveryLogo}
              />
              <Text style={styles.deliveryText}>2-3 days</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.summarySection}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Order:</Text>
            <View>
              {data.map((item, index) => (
                <Text key={index} style={styles.summaryLabel}>
                  {item.name} x {item.price}$ x {item.quantity}
                </Text>
              ))}
            </View>
            <Text style={styles.summaryValue}>{total}$</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery:</Text>
            <Text style={styles.summaryValue}>{ship}$</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Summary:</Text>
            <Text style={styles.summaryTotal}>{total + ship}$</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.submitButton}>
        <PrimaryButton
          onPress={() => {
            console.log("Navigating to Success...");
            navigation.navigate("success");
          }}
        >
          SUBMIT ORDER
        </PrimaryButton>
      </View>
    </View>
  );
};
export default Checkout;
