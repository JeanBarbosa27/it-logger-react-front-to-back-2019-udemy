import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ISystemLogState from '../../interfaces/ISystemLogState';
import ISystemLog from '../../interfaces/ISystemLog';
import { RootState } from '../index';

const initialState: ISystemLogState = {
  current: null,
  error: null,
  firstLoad: true,
  loading: false,
  logs: null,
}

export const systemLogReducer = createSlice({
  name: 'systemLog',
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<ISystemLog>) => {
      state.logs?.push(action.payload);
    },
    addLogsInBatch: (state, action: PayloadAction<Array<ISystemLog>>) => {
      if (state.firstLoad) {
        state.logs = action.payload;

        return;
      }

      if (!state.logs) {
        state.logs = [];
      }

      action.payload.forEach(log => state.logs?.push(log))
    },
    updateLog: (state, action: PayloadAction<ISystemLog>) => {
      state.logs?.forEach(log => {
        if (log.id == action.payload.id) {
          log = action.payload;
        }
      })
    },
    deleteLog: (state, action: PayloadAction<number>) => {
      if (state.logs) {
        state.logs = state.logs.filter(log => log.id != action.payload);
      }
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setFirstLoad: (state, action: PayloadAction<boolean>) => {
      state.firstLoad = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    clearLogs: state => {
      state = initialState
    },
  }
});

export const {
  addLog,
  addLogsInBatch,
  updateLog,
  deleteLog,
  setError,
  setFirstLoad,
  setLoading,
  clearLogs
} = systemLogReducer.actions;
export const getLogs = (state: RootState) => state.systemLog.logs;
export const getLogById = (state: RootState, action: PayloadAction<number>) => {
  return state.systemLog.logs?.find(log => log.id == action.payload);
}
export const filterLogsByTech = (state: RootState, action: PayloadAction<string>) => {
  return state.systemLog.logs?.filter(log => log.tech == action.payload);
}
export const isFirstLoad = (state: RootState) => state.systemLog.firstLoad;
export const isLoading = (state: RootState) => state.systemLog.loading;

export default systemLogReducer.reducer;
