// store.js
import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "./venueSlice";
import aVReducer from "./avSlice";
import mealsReducer from "./mealsSlice";

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: aVReducer,
    meals: mealsReducer,
  },
});
