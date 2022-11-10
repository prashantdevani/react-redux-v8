import { createSlice } from "@reduxjs/toolkit";

const addHandler = (state, actions) => {
  const {name, date} = actions.payload
  state.push({
    name,
    date,
  });
};
export const todoSlice = createSlice({
  name: "TodoList",
  initialState: [
    {
      name: "task 1",
      date: "02/01/2020",
    },
    {
      name: "task 2",
      date: "05/05/2022",
    },
    {
      name: "task 6",
      date: "06/06/2022",
    },
  ],
  reducers: {
    add: addHandler,
    empty: (state) => {
      for (let i = 0; i <= state.length; i++) {
        state.pop();
        state.pop();
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, empty } = todoSlice.actions;

export default todoSlice.reducer;
