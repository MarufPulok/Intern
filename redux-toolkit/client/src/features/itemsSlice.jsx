import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: { items: [] },
  reducers: { 
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.items.filter((item) => item !== action.payload);
    }
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;
