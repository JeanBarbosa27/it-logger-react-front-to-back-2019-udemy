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
const defaultHeaderBodyForJSON = (log: ISystemLogDTO) => {
  return {
    body: JSON.stringify(log),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

// Selectors
export const getLogs = (state: RootState) => state.systemLog.logs;
export const getLogById = (state: RootState, action: PayloadAction<number>) => {
  return state.systemLog.logs?.find(log => log.id == action.payload);
}
export const getCurrentLog = (state: RootState) => state.systemLog.current;
export const filterLogsByTech = (state: RootState, action: PayloadAction<string>) => {
  return state.systemLog.logs?.filter(log => log.tech == action.payload);
}
export const isFirstLoad = (state: RootState) => state.systemLog.firstLoad;
export const isLoading = (state: RootState) => state.systemLog.loading;

// Async Thunk actions
export const addLog = createAsyncThunk(
  `${reducerName}/addLog`,
  async (log: ISystemLogDTO) => {
    const response = await fetch(baseURL, {
      method: 'POST',
      ...defaultHeaderBodyForJSON(log),
    });

    return (await response.json());
  }
);

export const fetchLogs = createAsyncThunk(
  `${reducerName}/fetchLogs`,
  async () => {
    const response = await fetch(baseURL);

    return (await response.json());
  }
);

export const updateLog = createAsyncThunk(
  `${reducerName}/updateLog`,
  async (log: ISystemLog) => {
    const response = await fetch(`${baseURL}/${log.id}`, {
      method: 'PUT',
      ...defaultHeaderBodyForJSON(log),
    });

    return (await response.json());
  }
);

export const deleteLog = createAsyncThunk(
  `${reducerName}/deleteLog`,
  async (id: number) => {
    await fetch(`${baseURL}/${id}`, { method: 'DELETE' });

    return id
  }
);

export const searchLog = createAsyncThunk(
  `${reducerName}`,
  async (text: string) => {
    const response = await fetch(`${baseURL}?q=${text}`);

    return (await response.json());
  }
)

// Reducer slices
export const systemLogReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setCurrentLog(state, action: PayloadAction<ISystemLog>) {
      state.current = action.payload;
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
      .addCase(addLog.fulfilled, (state, action) => {
        // Add reject case
        state.logs?.push(action.payload);
      })
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
      .addCase(updateLog.fulfilled, (state, action) => {
        state.logs = state.logs?.map(log => log.id === action.payload.id ? action.payload : log) || [];
      })
      .addCase(deleteLog.fulfilled, (state, action) => {
        // Add reject case
        state.logs = state.logs?.filter(log => log.id !== action.payload) || [];
      })
      .addCase(searchLog.fulfilled, (state, action) => {
        state.logs = action.payload;
      })
  }
});

export const {
  setCurrentLog,
  setError,
  setFirstLoad,
  setLoading,
  clearLogs
} = systemLogReducer.actions;

export default systemLogReducer.reducer;
