import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const getProductsByCategory = createAsyncThunk(
  "categories/getProductsByCategory",
  async ({ id, filter }) => {
    try {
      const response = await authInstance.get(`/categories/${id}/products`, {
        params: {
          minPrice: filter.range?.[0] || 0,
          maxPrice: filter.range?.[1] || 1000,
          color: filter.color || "",
          size: filter.size || "",
          childrenCategoryId: filter.category || null,
        },
      });
      const { products } = response.data;
      console.log(products);
      return products;
    } catch (error) {
      console.log("Error fetching products:", error);
    }
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
// export const getSubCategory = createAsyncThunk(
//   "categories/getSubCategory",
//   async (id) => {
//     const response = await authInstance.get(`/sub-categories/${id}/products`);
//     const { products } = response.data;
//     return products;
//   }
// );
