import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import trackerReducer from 'features/tracker/trackerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tracker: trackerReducer,
  },
});
