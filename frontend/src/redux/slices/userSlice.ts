import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
//import Cookies from 'js-cookie';
import { login, logout, getLoggedInUser } from '@/utils/services'

interface UserState {
    token: string | null;
    user: {
        id: string;
        email: string;
        fullName: string;
        role: 'admin' | 'talent' | null;
    } | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    token: null,
    user: null,
    // token: 'mjdjcjdcjdkcdj',
    // user: {
    //     id: '8373873',
    //     email: 'kwizeracaleb91@gmail.com',
    //     fullName: 'Kwizera Caleb',
    //     role: 'admin',
    // },
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
          const response = await login(credentials.email, credentials.password);
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error.response.data.message);
        }
    }
)

export const fetchLoggedInUser = createAsyncThunk(
    'user/fetchUser',
    async (_, { rejectWithValue }) => {
      try {
        const response = await getLoggedInUser();
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data.message);
      }
    }
);

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
      try {
        await logout();
      } catch (error: any) {
        return rejectWithValue(error.response.data.message);
      }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.token = action.payload.token;
          state.user = action.payload.user;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })

        .addCase(fetchLoggedInUser.fulfilled, (state, action) => {
          state.user = action.payload;
        })

        .addCase(logoutUser.fulfilled, (state) => {
          state.token = null;
          state.user = null;
        });
    },
});
  
export default userSlice.reducer;