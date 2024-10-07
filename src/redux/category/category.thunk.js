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
    console.log(categories);
    return categories;
  }
);
export const getSubCategory = createAsyncThunk(
  "categories/getSubCategory",

  async (id) => {
    const response = await authInstance.get(`/sub-categories/${id}/products`);
    const { products } = response.data;
    return products;
  }
);
