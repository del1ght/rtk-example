import { IUser } from '../../models/IUser';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './ActionCreators';

interface IInitialState {
  users: IUser[];
  loading: boolean;
  error: null | string;
}

const initialState: IInitialState = {
  users: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // usersFetching: (state) => {
    //   state.loading = true;
    // },
    // usersFetchingSuccess: (state, action: PayloadAction<IUser[]>) => {
    //   state.loading = false;
    //   state.users = action.payload;
    //   state.error = null;
    // },
    // usersFetchingError: (state, action: PayloadAction<string>) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },

  // deprecated
  // extraReducers: {
  //   [fetchUsers.pending.type]: (state) => {
  //     state.loading = true;
  //   },
  //   [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
  //     state.loading = false;
  //     state.users = action.payload;
  //     state.error = null;
  //   },
  //   [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default userSlice.reducer;
