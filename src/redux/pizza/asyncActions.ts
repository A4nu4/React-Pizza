import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "./types";
import { SearchPizzaParams } from "./slice";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  `pizza/fetchPizzasStatus`,
  async (params) => {
    const { sortBy, order, search, category, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://6a7c56b1a008c10e4cbf4595.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data;
  },
);
