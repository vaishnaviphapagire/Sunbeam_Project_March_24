import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loginStatus: false,
    loginRole: "",
  },
  reducers: {
    loginAction: (state,action)  => {
      state.loginStatus = true
      state.loginRole= action.payload
    },
    logoutAction: (state) => {
      state.loginStatus = false
      state.loginRole = ""
    },
  },
})

export const { loginAction, logoutAction } = userSlice.actions
export default userSlice.reducer
