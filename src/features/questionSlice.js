import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: null,
  metadata: null,
  id: null,
};

export const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      const { Metadata, _id } = action.payload;
      state.metadata = Metadata;
      state.id = _id;
    },
  },
});

export const { setQuestion } = questionSlice.actions;

export default questionSlice.reducer;
