// Once createStore is deprecated, I didn't follow the class here, I followed the redux docs: https://redux.js.org/usage/configuring-your-store/

import { configureStore } from '@reduxjs/toolkit';
import systemLogReducer from './reducers/systemLogReducer';

const store = configureStore({
  reducer: {
    systemLog: systemLogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
