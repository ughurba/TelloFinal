import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
  colors: string[];
}
const initialState: initialStateProps = {
  colors: [],
};
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string[]>) => {
      state.colors = action.payload;
    },
  },
});
export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
