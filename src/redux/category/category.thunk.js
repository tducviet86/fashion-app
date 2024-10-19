import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const getProductsByCategory = createAsyncThunk(
  "categories/getProductsByCategory",

  async ({ id, filter }) => {
    const response = await authInstance.get(`/categories/${id}/products`, {
      params: {
        minPrice: filter.range[0],
        maxPrice: filter.range[1],
        color: filter.color,
        size: filter.size,
        category: filter.category,
      },
    });
    const { products } = response.data;
    return products;
  }
);
export const getProductsByFilter = createAsyncThunk(
  "categories/getProductsByFilter",

  async ({ id, filter }) => {
    const response = await authInstance.get(`/categories/${id}/products`, {
      params: {
        minPrice: filter.range[0],
        maxPrice: filter.range[1],
        color: filter.color,
        size: filter.size,
        category: filter.category,
      },
    });
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

  async (id) => {
    const response = await authInstance.get(`/sub-categories/${id}/products`);
    const { products } = response.data;
    return products;
  }
);
