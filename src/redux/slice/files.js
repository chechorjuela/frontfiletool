import {createSlice} from "@reduxjs/toolkit";

const files = createSlice({
  name: 'files',
  initialState: {
    loadingRequest: false,
    files: [],
    selectedFile: {},
    filesSelected: []
  },
  reducers: {
    loadingRequest: (state, action) => {
      state.loadingRequest = action.payload;
      return state;
    },
    getFilesSlice: (state, action) => {
      state.loadingRequest = false;
      state.files = action.payload;
      return state
    },
    getFilesSelected: (state, action) => {
      state.loadingRequest = false;
      state.filesSelected = action.payload;
      return state;
    }
  }
})
export const {getFilesSlice, getFilesSelected, loadingRequest} = files.actions
export default files.reducer