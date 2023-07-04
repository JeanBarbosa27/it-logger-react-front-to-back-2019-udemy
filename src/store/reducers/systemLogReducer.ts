import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ISystemLog from '../../interfaces/ISystemLog';

const initialState: Array<ISystemLog> = [{
  id: 0,
  attention: false,
  date: "",
  message: "",
  tech: "",
}]

export const systemLogReducer = createSlice({
  name: 'systemLogs',
  initialState,
  reducers: {
    getLogs: state => state,
    addLog: (state, action: PayloadAction<ISystemLog>) => [...state, action.payload],
    deleteLog: (state, action: PayloadAction<number>) => state.filter(log => log.id != action.payload),
    getLogById: (state, action: PayloadAction<number>) => state.filter(log => log.id == action.payload),
    filterLogsByTech: (state, action: PayloadAction<string>) => state.filter(log => log.tech == action.payload),
  }
});

export const { getLogs } = systemLogReducer.actions;

export default systemLogReducer.reducer;
