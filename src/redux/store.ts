import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice.ts";
import cart from "./cart/slice.ts";
import pizza from "./pizza/slice.ts";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
