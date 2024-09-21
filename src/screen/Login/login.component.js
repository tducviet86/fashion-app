import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./login.style";

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogin}>
        <Text style={styles.header}>Login</Text>
        <View>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput
            placeholder="Password"
            // secureTextEntry="true"
            style={styles.input}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text>Forgot your password ?</Text>
            <Ionicons name="arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <PrimaryButton>Login</PrimaryButton>
      </View>
      <View style={styles.loginWithAccount}>
        <Text>or Login with social account </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.iconLogin}>
            <Ionicons name="logo-google" size={24} color="#EA4335" />
          </View>
          <View style={styles.iconLogin}>
            <Ionicons name="logo-facebook" size={24} color="#3B5998" />
          </View>
        </View>
      </View>
      <TouchableOpacity hitSlop={10} style={styles.closeButton}>
        <Ionicons name="chevron-back" size={30} color={"#495057"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default Login;
