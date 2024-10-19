import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Slider } from "@miblanchard/react-native-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import styles from "./filters.style";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/category/category.slice";
import { getProductsByCategory } from "../../redux/category/category.thunk";

const Filter = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.category.filter);
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
  const categories = ["T-Shorts", "Blouse"];

  // luu vao` redux
  // viet state, cap nhat gia tri tu filter redux
  // chua click apply luu tru vao` state sau khi click apply thi` luu vao` redux
  useEffect(() => {
    setRange(filter.range);
    setSelectedColor(filter.color);
    setSelectedSize(filter.size);
    setSelectedCategory(filter.category);
  }, []);
  const applyFilter = () => {
    dispatch(
      getProductsByCategory({
        filter: {
          range: range,
          color: selectedColor,
          size: selectedSize,
          category: selectedCategory,
        },
      })
    );
    navigation.goBack();
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
        <PrimaryButton onPress={applyFilter}>Apply</PrimaryButton>
      </View>
    </View>
  );
};

export default Filter;
