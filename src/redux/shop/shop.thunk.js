import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const getCategories = createAsyncThunk(
  "categories/getCategories",

  async () => {
    const response = await authInstance.get("/categories");
    const { categories } = response.data;
    return categories;
  }
);
