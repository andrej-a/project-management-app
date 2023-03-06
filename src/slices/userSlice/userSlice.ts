import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialState } from './initialState';
/* SERVICES */
import { createUser } from '../../service/createUser';
import { loginUser } from '../../service/loginUser';
import { editUser } from '../../service/editUser';
/* MODELS */
import { IRegistrationData } from '../../models/IInputData';
import { ILogInData } from '../../models/IInputData';
import { getAllUsers } from '../../service/getAllUsers';

export const registrationUser = createAsyncThunk(
  'user/registrationUser',
  (data: IRegistrationData) => {
    return createUser(data);
  }
);

interface IEditUserThunkProps {
  userID: string;
  data: IRegistrationData;
}

export const editUserThunk = createAsyncThunk(
  'user/editUser',
  ({ userID, data }: IEditUserThunkProps) => {
    return editUser(userID, data);
  }
);

export const loginUserThunk = createAsyncThunk('user/login', (data: ILogInData) => {
  return loginUser(data);
});

export const getAllUsersThunk = createAsyncThunk('user/allUsers', () => {
  return getAllUsers();
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorizationSwitch: (state) => {
      state.isAuthorized = !state.isAuthorized;
    },
    updateCurrentState: (state, action) => {
      state.id = action.payload._id;
      state.login = action.payload.login;
      state.name = action.payload.name;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { authorizationSwitch, updateCurrentState, setUsers } = actions;
export default reducer;
