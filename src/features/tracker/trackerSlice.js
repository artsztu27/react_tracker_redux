import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  items: [{
    id:1,
    count:'2',
    item:'糖果'
  } , {
    id:2,
    count:'4',
    item:'巧克力'
  },{
    id:3,
    count:'2',
    item:'糖果'
  } , {
    id:4,
    count:'5',
    item:'巧克力'
  }]
};
export const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log('action = ',action.payload)
      action.item.id = state.items.length
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload.id, 1)
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
});
export const selectTracker = (state) => state.tracker.items;
export const { addItem, removeItem, increaseCount, decreaseCount } = trackerSlice.actions;


export default trackerSlice.reducer;
