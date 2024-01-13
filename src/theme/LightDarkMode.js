import { createSlice } from '@reduxjs/toolkit';

const lightStyles = ['light', 'text-ci-text', 'bg-ci-bg'];
const darkStyles = ['dark', 'text-slate-400', 'bg-slate-900'];

const applyStyles = (styles) => {
  const { classList } = document.documentElement;
  classList.remove(...darkStyles);
  classList.remove(...lightStyles);
  classList.add(...styles);
};

const initialState = {
  color: 'light-mode',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    lightMode: (state) => {
      applyStyles(lightStyles);
      state.color = 'light-mode';
    },
    darkMode: (state) => {
      applyStyles(darkStyles);
      state.color = 'dark-mode';
    },
  },
});

export const { lightMode, darkMode } = themeSlice.actions;

export default themeSlice.reducer;