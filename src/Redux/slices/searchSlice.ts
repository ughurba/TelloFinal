import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
  searchValue: string;
}
const initialState: initialStateProps = {
  searchValue: "",
};
export const searchSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});
export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
