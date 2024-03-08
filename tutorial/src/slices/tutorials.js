import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TutorialDataService from "../services/TutorialService";

const initialState = [];

export const createTutorial = createAsyncThunk(
  "tutorials/create",
  async ({ title, description }) => {
    const res = await TutorialDataService.create({ title, description });
    return res.data;
  }
);

export const retrieveTutorials = createAsyncThunk(
  "tutorials/retrieve",
  async () => {
    const res = await TutorialDataService.getAll();
    return res.data;
  }
);

export const updateTutorial = createAsyncThunk(
  "tutorials/update",
  async ({ id, data }) => {
    const res = await TutorialDataService.update(id, data);
    return res.data;
  }
);

export const deleteTutorial = createAsyncThunk(
  "tutorials/delete",
  async ({ id }) => {
    await TutorialDataService.remove(id);
    return { id };
  }
);

export const deleteAllTutorials = createAsyncThunk(
  "tutorials/deleteAll",
  async () => {
    const res = await TutorialDataService.removeAll();
    return res.data;
  }
);

export const findTutorialsByTitle = createAsyncThunk(
  "tutorials/findByTitle",
  async ({ title }) => {
    const res = await TutorialDataService.findByTitle(title);
    return res.data;
  }
);

const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  reducers: {}, // You can define additional reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(createTutorial.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(retrieveTutorials.fulfilled, (state, action) => {
        return [...action.payload];
      })
      .addCase(updateTutorial.fulfilled, (state, action) => {
        return state.map((tutorial) =>
          tutorial.id === action.payload.id ? { ...tutorial, ...action.payload } : tutorial
        );
      })
      .addCase(deleteTutorial.fulfilled, (state, action) => {
        return state.filter(({ id }) => id !== action.payload.id);
      })
      .addCase(deleteAllTutorials.fulfilled, (state, action) => {
        return [];
      })
      .addCase(findTutorialsByTitle.fulfilled, (state, action) => {
        return [...action.payload];
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          // Handle rejected actions if needed
          console.error("Async thunk rejected:", action.error);
        }
      );
  },
});

const { reducer } = tutorialSlice;
export default reducer;
