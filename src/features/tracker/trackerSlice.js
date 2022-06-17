import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from 'features/tracker/trackerAPI';

const initialState = {
  status: 'idle',
  items: []
};
export const getDataAsync = createAsyncThunk(
  'tracker/fetchData',
  async () => {
    const response = await fetchData();
    return response.data;
  }
);
export const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    addItem: (state, action) => {
      action.payload.id = state.items.length
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      for (var i = 0; i < state.items.length; i++) {
        var obj = state.items[i];
        if (action.payload.id === obj.id) {
          state.items.splice(i, 1);
        }
      }
    },
    increaseCount: (state, action) => {
      let item = state.items.find(x => (x.id === action.payload.id));
      item.count++;
    },
    decreaseCount: (state, action) => {
      let item = state.items.find(x => (x.id === action.payload.id));
      if(item.count !== 0){
        item.count--;
      }

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items =[...action.payload];
      });
  },
});
export const selectTracker = (state) => state.tracker.items;
export const { addItem, removeItem, increaseCount, decreaseCount } = trackerSlice.actions;


export default trackerSlice.reducer;
