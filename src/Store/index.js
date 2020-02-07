import {configureStore} from '@reduxjs/toolkit';
import listReducer from './Ducks/Lists';

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export default store;
