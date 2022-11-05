import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../features/city/citiesSlice";
// import searchReducer from "../features/search/searchSlice";
import hotelReducer from "../features/hotel/hotelsSlice";
import hotelDetailsReducer from "../features/hotel/HotelDetailsSlice";

const store = configureStore({
  reducer: {
    // search: searchReducer,
    city: citiesReducer,
    hotel: hotelReducer,
    hotelDetails: hotelDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
