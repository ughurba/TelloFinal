import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ISlider } from "../../types";
import axios from "axios";

export const fetchSlider = createAsyncThunk<ISlider[]>(
  "slider/sliderFetch",
  async () => {
    const { data } = await axios.get<ISlider[]>(
      `https://62b19376196a9e9870386a98.mockapi.io/sliderImg`
    );
    return data;
  }
);

interface IStateInitial {
  sliderImg: ISlider[];
  bigSlider: ISlider[];
}
const initalState: IStateInitial = {
  sliderImg: [],
  bigSlider: [],
};
export const sliderSlices = createSlice({
  name: "slider",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlider.pending, (state) => {
        state.sliderImg = [];
        state.bigSlider = [];
      })
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.sliderImg = action.payload.filter(
          (item) => item.type === "small"
        );
        state.bigSlider = action.payload.filter((item) => item.type === "big");
      });
  },
});

// export const { setSliderImgSmall, setSliderImgBig } = sliderSlices.actions;
export default sliderSlices.reducer;
