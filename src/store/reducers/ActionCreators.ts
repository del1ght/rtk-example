import axios from 'axios';
import { IUser } from '../../models/IUser';
import { AppDispatch } from '../store';
// import { userSlice } from './UserSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// const { usersFetching, usersFetchingError, usersFetchingSuccess } =
//   userSlice.actions;

// default thunk way
// export const fetchUsers = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       dispatch(usersFetching());
//       const response = await axios.get<IUser[]>(apiUrl);
//       dispatch(usersFetchingSuccess(response.data));
//     } catch (e) {
//       dispatch(usersFetchingError('error when fetching users'));
//     }
//   };
// };

// rtk way
export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(apiUrl);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('error when fetching users');
    }
  }
);
