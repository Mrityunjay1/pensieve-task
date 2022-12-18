import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "./authService";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk(
  "signupUser",
  async (body, thunkAPI) => {
    const res = await fetch('http://52.74.166.134:3000/api/signup/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    })
    return await res.json()
  }
);

// export const logout = createAsyncThunk(
//   "http://52.74.166.134:3000/api/logout",
//   async () => {
//     await authService.logout();
//   }
// );

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = '';
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: {
    [register.pending]:(state,action)=>{
      state.isLoading = true
    },
    [register.fulfilled]: (state,{payload: isError,message,})=>{
      state.isLoading=false
      if(isError){
        state.isError= isError
      }else{
        state.message=message
      }
    },
    [register.fulfilled]:(state,action)=>{
      state.isLoading = false
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;


