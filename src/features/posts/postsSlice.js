import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
    deletePosts: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { postAdded } = postsSlice.actions;

export const { deletePosts } = postsSlice.actions;

export default postsSlice.reducer;
