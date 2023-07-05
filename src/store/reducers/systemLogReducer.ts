import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ISystemLogState from '../../interfaces/ISystemLogState';
import ISystemLog from '../../interfaces/ISystemLog';
import { RootState } from '../index';

const initialState: ISystemLogState = {
  loading: false,
  logs: [],
}

export const systemLogReducer = createSlice({
  name: 'systemLogs',
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<ISystemLog>) => {
      state.logs.push(action.payload)
    },
    updateLog: (state, action: PayloadAction<ISystemLog>) => {
      const logToUpdateIndex = state.logs.findIndex(log => log.id == action.payload.id);
      state.logs[logToUpdateIndex] = action.payload;
    },
    deleteLog: (state, action: PayloadAction<number>) => {
      state.logs = state.logs.filter(log => log.id != action.payload);
    },
  }
});

export const { deleteLog, addLog } = systemLogReducer.actions;
export const getLogs = (state: RootState) => state.systemLogReducer.logs;
export const getLogById = (state: RootState, action: PayloadAction<number>) => {
  return state.systemLogReducer.logs.find(log => log.id == action.payload);
}
export const filterLogsByTech = (state: RootState, action: PayloadAction<string>) => {
  return state.systemLogReducer.logs.filter(log => log.tech == action.payload);
}
export const isLoadng = (state: RootState) => state.systemLogReducer.loading;

export default systemLogReducer.reducer;
