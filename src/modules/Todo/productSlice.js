import { createSlice } from "@reduxjs/toolkit";
import { add } from "./todoSlice";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [
      {
        name: "product 1",
        date: "02/01/2020",
      },
      {
        name: "product 2",
        date: "05/05/2022",
      },
    ],
  },
  reducers: {
    addItem: (state) => {
      state.items.push({
        name: "product 3",
        date: "03/03/2022",
      });
    },
  },
  extraReducers: {
    [add]: (state, actions) => {
      const {name, date} = actions.payload
      state.items.push({
        name: "product 4 -- " + name,
        date: "04/04/2022 -- " + date,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = productSlice.actions;

// const a = {
//   actions: {
//     addItem: () => {},
//   },
// };

export default productSlice.reducer;
