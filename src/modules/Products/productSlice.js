import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    updateProducts: (state, actions) => {
      const { productsInfo } = actions.payload;
      if (productsInfo) {
        return productsInfo;
      }
    },
  },
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
