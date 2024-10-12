import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Slider } from "@miblanchard/react-native-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import styles from "./filters.style";

const Filter = () => {
  const navigation = useNavigation();
  const [range, setRange] = useState([0, 1000]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const colors = [
    "#020202",
    "#F6F6F6",
    "#B82222",
    "#BEA9A9",
    "#E2BB8D",
    "#151867",
  ];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const categories = ["All", "T-Shorts", "Blouse"];

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const savedRange = await AsyncStorage.getItem("range");
        const savedColor = await AsyncStorage.getItem("color");
        const savedSize = await AsyncStorage.getItem("size");
        const savedCategory = await AsyncStorage.getItem("category");

        if (savedRange) setRange(JSON.parse(savedRange));
        if (savedColor) setSelectedColor(savedColor);
        if (savedSize) setSelectedSize(savedSize);
        if (savedCategory) setSelectedCategory(savedCategory);
      } catch (error) {
        console.error("Failed to load filters:", error);
      }
    };

    loadFilters();
  }, []);
  const saveFilters = async () => {
    console.log("Apply button pressed");
    try {
      await AsyncStorage.setItem("range", JSON.stringify(range));
      await AsyncStorage.setItem("color", selectedColor || "");
      await AsyncStorage.setItem("size", selectedSize || "");
      await AsyncStorage.setItem("category", selectedCategory || "");
    } catch (error) {
      console.error("Failed to save filters:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerShop}>
        <TouchableOpacity hitSlop={10} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={"#495057"} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Filter</Text>
        </View>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.contentContainer,
          { paddingBottom: 100 },
        ]}
      >
        {/* Price Range */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price range</Text>
          <View style={styles.priceSlider}>
            <View style={styles.priceRangeText}>
              <Text>${range[0]}</Text>
              <Text>${range[1]}</Text>
            </View>
            <Slider
              value={range}
              onValueChange={(values) => setRange(values)}
              minimumValue={0}
              maximumValue={1000}
              step={1}
              minimumTrackTintColor="#DB3022"
              maximumTrackTintColor="#DB3022"
              thumbTintColor="#DB3022"
              trackStyle={{ height: 4 }}
              thumbStyle={styles.thumbStyle}
            />
          </View>
        </View>

        {/* Colors */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Colors</Text>
          <View style={styles.colorContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorCircle,
                  { backgroundColor: color },
                  selectedColor === color && styles.selectedColorCircle,
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </View>

        {/* Sizes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sizes</Text>
          <View style={styles.sizeContainer}>
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.selectedSizeButton,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Category</Text>
          <View style={styles.categoryContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category &&
                    styles.selectedCategoryButton,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton onPress={() => navigation.goBack()}>
          Discard
        </PrimaryButton>
        <PrimaryButton onPress={saveFilters}>Apply</PrimaryButton>
      </View>
    </View>
  );
};

export default Filter;
