import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import Cart from "./src/screen/Cart/cart.component";
import Favorites from "./src/screen/Favorites/favorites.component";
import Main from "./src/screen/Main/main.component";
import Profile from "./src/screen/Profile/profile.component";
import Shop from "./src/screen/Shop/shop.component";
import TabBar from "./src/component/tab-bar/tab-bar.component.js";
import { Provider, useDispatch } from "react-redux";
import store from "./src/redux/store";
import Category from "./src/screen/Category/category.component";
import Filter from "./src/screen/Filters/filters.component";
import ProductDetails from "./src/screen/Product-Details/product-details.component";
import { injectStore } from "./src/helpers/api";
import { useEffect } from "react";
import { getTokenThunk } from "./src/redux/auth/auth.thunk";
import Checkout from "./src/screen/Checkout/checkout.component.js";
import Success from "./src/screen/Success/success.component.js";
import Login from "./src/screen/Login/login.component.js";
// import AsyncStorage from "@react-native-async-storage/async-storage";

injectStore(store);
// AsyncStorage.clear();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const App = () => (
  <Provider store={store}>
    <Controller />
  </Provider>
);

const Controller = () => {
  const dispatch = useDispatch();

  const setup = async () => {
    await dispatch(getTokenThunk());
  };

  useEffect(() => {
    setup();
  }, []);

  return <ProtectedStack />;
};
const ProtectedStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Shop" component={ShopStack} />
      {/* <Stack.Screen name="product" component={ProductStack} /> */}
      <Stack.Screen name="product-details" component={ProductDetails} />
      <Stack.Screen name="checkout" component={Checkout} />
      <Stack.Screen name="success" component={Success} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
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

const HomeStack = () => {
  return (
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
      {/* <BottomTab.Screen
        name="favorites"
        component={Favorites}
        options={{ tabBarLabel: "Favorites", icon: "heart-outline" }}
      /> */}
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{ tabBarLabel: "Home", icon: "person-outline" }}
      />
    </BottomTab.Navigator>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
