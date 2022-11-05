import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JSON_API } from "../../constant";
import axios from "axios";

const initialState = {
  loading: false,
  hotelDetails: [],
  error: "",
};

export const fetchHotelDetails = createAsyncThunk(
  "hotels/fetchHotelDetails",
  (hotelId) => {
    return axios
      .get(`${JSON_API}/hotels/${hotelId}?_expand=city`)
      .then((response) => response.data);
  }
);

const hotelDetailsSlice = createSlice({
  name: "hotelDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHotelDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchHotelDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.hotelDetails = action.payload;
      state.error = "";
    });

    builder.addCase(fetchHotelDetails.rejected, (state, action) => {
      state.loading = false;
      state.hotelDetails = [];
      state.error = action.error.message;
    });
  },
});

export default hotelDetailsSlice.reducer;
