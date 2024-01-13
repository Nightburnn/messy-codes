import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../theme/LightDarkMode'
import userdataReducer from './user/userdata'
export const store = configureStore({
  reducer: {
    theme:themeReducer,
    userdata: userdataReducer,
  },
})