import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const getProductsByCategory = createAsyncThunk(
  "categories/getProductsByCategory",

  async (id) => {
    const response = await authInstance.get(`/categories/${id}/products`);
    const { products } = response.data;
    return products;
  }
);
export const getSubCategoryByCategory = createAsyncThunk(
  "categories/getSubCategoryByCategory",
  async (id) => {
    const response = await authInstance.get(`/categories/${id}/children`);
    const { categories } = response.data;
    return categories;
  }
);
export const getSubCategory = createAsyncThunk(
  "categories/getSubCategory",
  async ({ id, filter }) => {
    const response = await authInstance.get(`/sub-categories/${id}/products`, {
      params: {
        minPrice: filter.range[0],
        maxPrice: filter.range[1],
        color: filter.color || null, // Đảm bảo color không bị undefined
        size: filter.size || null, // Đảm bảo size không bị undefined
        category: filter.category || null, // Đảm bảo category không bị undefined
      },
    });
    console.log("API Response:", response.data);
    const { products } = response.data;
    return products;
  }
);
