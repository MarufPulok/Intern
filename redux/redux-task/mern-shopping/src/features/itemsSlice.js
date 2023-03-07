import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;
