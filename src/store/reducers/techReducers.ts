import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import ITechState from "../../interfaces/ITechState";
import { RootState } from "../index";
import ITech, { ITechDTO } from "../../interfaces/ITech";

const reducerName = 'techReducer';
// TODO: Create an HTTPClient utils file to abstract this code below. It can be find on systemLogReducer as well
const baseURL = 'http://localhost:5000/techs';
const setDefaultHeadersAndBody = (tech: ITechDTO) => {
  return {
    body: JSON.stringify(tech),
    Headers: {
      'Content-Type': 'application/json',
    },
  }
};

const initialState: ITechState = {
  current: null,
  error: null,
  techs: null,
}

// Selectors
export const getTechs = (state: RootState) => state.tech.techs;
export const getCurrentTech = (state: RootState) => state.tech.current
export const getTechError = (state: RootState) => state.tech.error;

// Async thunks
export const addTech = createAsyncThunk(
  `${reducerName}/addTech`,
  async (tech: ITechDTO) => {
    const response = await fetch(baseURL, {
      method: 'POST',
      ...setDefaultHeadersAndBody(tech),
    });

    // FIXME: For some reason JSON Server is returning only the id on payload. It shouldn't happen
    // TODO: Try to fix on JSON server, by the way it will be replaced by a back-end with Node and Express
    return (await response.json());
  },
);

export const fetchTechs = createAsyncThunk(
  `${reducerName}/fetchTechs`,
  async () => {
    const response = await fetch(baseURL);

    return (await response.json());
  },
);

export const updateTech = createAsyncThunk(
  `${reducerName}/updateTech`,
  async (tech: ITech) => {
    const response = await fetch(`${baseURL}/${tech.id}`, {
      method: 'PUT',
      ...setDefaultHeadersAndBody(tech),
    });

    return (await response.json());
  },
);

export const deleteTech = createAsyncThunk(
  `${reducerName}/deleteTech`,
  async (id: number) => {
    await fetch(`${baseURL}/${id}`, { method: 'DELETE' });

    return id;
  },
);

// Slice
export const techReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setTech(state, action) {
      state.techs?.push(action.payload);
    },
    setTechsList(state, action) {
      state.techs = action.payload;
    },
    setTechError(state, action) {
      state.error = action.payload;
    },
    setCurrentTech(state, action) {
      state.current = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addTech.fulfilled, (state, action) => {
        state.techs?.push(action.payload);
      })
      .addCase(addTech.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(fetchTechs.fulfilled, (state, action) => {
        state.techs = action.payload;
      })
      .addCase(fetchTechs.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(updateTech.fulfilled, (state, action) => {
        state.techs = state.techs?.map(tech => tech.id === action.payload.id ? action.payload : tech) || [];
      })
      .addCase(updateTech.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(deleteTech.fulfilled, (state, action) => {
        state.techs = state.techs?.filter(tech => tech.id !== action.payload) || [];
      })
      .addCase(deleteTech.rejected, (state, action) => {
        state.error = action.payload as string;
      })
  }
});

// Actions
export const { setTech, setTechsList, setTechError, setCurrentTech } = techReducer.actions;

export default techReducer.reducer;
