import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cart from "./src/screen/Cart/cart.component";
import Favorites from "./src/screen/Favorites/favorites.component";
import Login from "./src/screen/Login/login.component";
import Main from "./src/screen/Main/main.component";
import Profile from "./src/screen/Profile/profile.component";
import Shop from "./src/screen/Shop/shop.component";
import TabBar from "./src/component/tab-bar/tab-bar.component.js";
import Register from "./src/screen/Register/register.componet";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Category from "./src/screen/Category/category.component";
import Filter from "./src/screen/Filters/filters.component";
import ProductDetails from "./src/screen/Product-Details/product-details.component";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="Shop" component={ShopStack} />
        {/* <Stack.Screen name="product" component={ProductStack} /> */}
        <Stack.Screen name="product-details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
const ShopStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Shop"
  >
    <Stack.Screen name="shop" component={Shop} />
    <Stack.Screen name="category" component={Category} />
    <Stack.Screen name="filter" component={Filter} />
  </Stack.Navigator>
);
// const ProductStack = () => (
//   <Stack.Navigator
//     screenOptions={{ headerShown: false }}
//     initialRouteName="Main"
//   >
//     <Stack.Screen name="main" component={Main} />
//     <Stack.Screen name="product-details" component={ProductDetails} />
//   </Stack.Navigator>
// );
const HomeStack = () => (
  <BottomTab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <TabBar {...props} />}
  >
    <BottomTab.Screen
      name="main"
      component={Main}
      options={{ tabBarLabel: "Home", icon: "home-outline" }}
    />
    <BottomTab.Screen
      name="ShopStack"
      component={ShopStack}
      options={{ tabBarLabel: "Shop", icon: "cart-outline" }}
    />
    <BottomTab.Screen
      name="cart"
      component={Cart}
      options={{ tabBarLabel: "Bag", icon: "bag-handle-outline" }}
    />
    <BottomTab.Screen
      name="favorites"
      component={Favorites}
      options={{ tabBarLabel: "Favorites", icon: "heart-outline" }}
    />
    <BottomTab.Screen
      name="profile"
      component={Profile}
      options={{ tabBarLabel: "Home", icon: "person-outline" }}
    />
  </BottomTab.Navigator>
);

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
