import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./shop.style";
import Women from "./Women/women.component";
import Men from "./Men/men.component";
import Kids from "./Kids/kids.component";
import { TabBar } from "../../component/tab-bar/tab-bar.component";
import { useState } from "react";
// import { Container } from './styles';

const Shop = () => {
  const [activeTab, setActiveTab] = useState("Women");
  const renderContent = () => {
    switch (activeTab) {
      case "Women":
        return <Women />;
      case "Men":
        return <Men />;
      case "Kids":
        return <Kids />;
      default:
        return <Women />;
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.containerShop}>
        <TouchableOpacity hitSlop={10}>
          <Ionicons name="chevron-back" size={30} color={"#495057"} />
        </TouchableOpacity>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity hitSlop={10}>
          <Ionicons name="search-outline" size={30} color={"#495057"} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Women" && styles.activeTab]}
          onPress={() => setActiveTab("Women")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Women" && styles.activeTabText,
            ]}
          >
            Women
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Men" && styles.activeTab]}
          onPress={() => setActiveTab("Men")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Men" && styles.activeTabText,
            ]}
          >
            Men
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Kids" && styles.activeTab]}
          onPress={() => setActiveTab("Kids")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Kids" && styles.activeTabText,
            ]}
          >
            Kids
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>{renderContent()}</View>
    </View>
  );
};

export default Shop;
