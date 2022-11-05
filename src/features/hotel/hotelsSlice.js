import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JSON_API } from "../../constant";
import axios from "axios";

const initialState = {
  loading: false,
  hotelsData: [],
  error: "",
};

export const fetchHotels = createAsyncThunk("hotels/fetchHotels", (cityId) => {
  return axios
    .get(`${JSON_API}/cities/${cityId}?_embed=hotels&_expand=country`)
    .then((response) => response.data);
});
console.log(`${JSON_API}/cities/1?_embed=hotels&_expand=country`);

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.loading = false;
      state.hotelsData = action.payload;
      state.error = "";
    });

    builder.addCase(fetchHotels.rejected, (state, action) => {
      state.loading = false;
      state.hotelsData = [];
      state.error = action.error.message;
    });
  },
});

export default hotelsSlice.reducer;
