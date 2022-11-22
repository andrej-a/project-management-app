import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialState } from './initialState';
/* SERVICES */
import { createUser } from '../../service/createUser';
/* MODELS */
import { IRegistrationData } from '../../models/IInputData';

export const registrationUser = createAsyncThunk(
  'user/registrationUser',
  (data: IRegistrationData) => {
    return createUser(data);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorizationSwitch: (state) => {
      state.isAuthorized = !state.isAuthorized;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrationUser.fulfilled, (state, action) => {
      state.id = action.payload._id;
      state.login = action.payload.login;
      state.name = action.payload.name;
    });
  },
});

const { actions, reducer } = userSlice;
export const { authorizationSwitch } = actions;
export default reducer;
