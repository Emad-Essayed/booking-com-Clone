import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JSON_API } from "../../constant";
import axios from "axios";

const initialState = {
  loading: false,
  cities: [],
  error: "",
};

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  (queryString = `countryId=1`) => {
    return axios
      .get(`${JSON_API}/cities?_expand=country&${queryString}`) //?name_like=${queryString}
      .then((response) => response.data);
  }
);

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.loading = false;
      state.cities = action.payload;
      state.error = "";
    });

    builder.addCase(fetchCities.rejected, (state, action) => {
      state.loading = false;
      state.cities = [];
      state.error = action.error.message;
    });
  },
});

export default citiesSlice.reducer;
