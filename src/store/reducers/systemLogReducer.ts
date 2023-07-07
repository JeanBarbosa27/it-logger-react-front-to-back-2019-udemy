import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ISystemLogState from '../../interfaces/ISystemLogState';
import ISystemLog, { ISystemLogDTO } from '../../interfaces/ISystemLog';
import { RootState } from '../index';

const initialState: ISystemLogState = {
  current: null,
  error: null,
  firstLoad: true,
  loading: false,
  logs: null,
}

const reducerName = 'systemLog';
const baseURL = 'http://localhost:5000/logs';

// Selectors
export const getLogs = (state: RootState) => state.systemLog.logs;
export const getLogById = (state: RootState, action: PayloadAction<number>) => {
  return state.systemLog.logs?.find(log => log.id == action.payload);
}
export const filterLogsByTech = (state: RootState, action: PayloadAction<string>) => {
  return state.systemLog.logs?.filter(log => log.tech == action.payload);
}
export const isFirstLoad = (state: RootState) => state.systemLog.firstLoad;
export const isLoading = (state: RootState) => state.systemLog.loading;

// Async Thunk actions
export const fetchLogs = createAsyncThunk(
  `${reducerName}/fetchLogs`,
  async () => {
    const response = await fetch(baseURL);

    return (await response.json());
  }
);

export const addLog = createAsyncThunk(
  `${reducerName}/addLog`,
  async (log: ISystemLogDTO) => {
    const response = await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return (await response.json())
  }
)

// Reducer slices
export const systemLogReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    updateLog(state, action: PayloadAction<ISystemLog>) {
      state.logs?.forEach(log => {
        if (log.id == action.payload.id) {
          log = action.payload;
        }
      })
    },
    deleteLog(state, action: PayloadAction<number>) {
      if (state.logs) {
        state.logs = state.logs.filter(log => log.id != action.payload);
      }
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setFirstLoad(state, action: PayloadAction<boolean>) {
      state.firstLoad = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    clearLogs(state) {
      state = initialState
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.logs = action.payload;
      })
      .addCase(fetchLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addLog.fulfilled, (state, action) => {
        state.logs?.push(action.payload);
      })
  }
});

export const {
  updateLog,
  deleteLog,
  setError,
  setFirstLoad,
  setLoading,
  clearLogs
} = systemLogReducer.actions;

export default systemLogReducer.reducer;
