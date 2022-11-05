import { createSlice } from "@reduxjs/toolkit";

const initEndDate = new Date();
initEndDate.setDate(initEndDate.getDate() + 1);

const initialState = {
  destination: {},
  searchDate: {
    startDate: new Date(),
    endDate: initEndDate,
    key: "selection",
    isDefaultDate: true,
  },
  options: {
    adults: 1,
    children: 0,
    rooms: 1,
  },
  isWork: false,
  isApartment: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setDates: (state, action) => {
      state.searchDate = action.payload;
    },
    setOptions: (state, action) => {
      state.options = action.payload;
    },
    setIsWork: (state, action) => {
      state.isWork = action.payload;
    },
    setIsApartment: (state, action) => {
      state.isApartment = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const {
  setDestination,
  setDates,
  setOptions,
  setIsWork,
  setIsApartment,
} = searchSlice.actions;
