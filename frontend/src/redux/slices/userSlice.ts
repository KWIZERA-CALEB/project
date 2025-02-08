import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, getLoggedInUser } from '@/utils/services';
import { api } from '@/utils/services'

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
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
    user: null,
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await login(credentials.email, credentials.password);
            localStorage.setItem("token", response.data.token);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const fetchLoggedInUser = createAsyncThunk(
    'user/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return rejectWithValue("No token found");

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
            localStorage.removeItem("token");
            delete api.defaults.headers.common["Authorization"];
            return null;
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
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchLoggedInUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLoggedInUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(fetchLoggedInUser.rejected, (state) => {
                state.loading = false;
                localStorage.removeItem("token");
                state.token = null;
                state.user = null;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.token = null;
                state.user = null;
                delete api.defaults.headers.common["Authorization"];
                state.loading = false;
            });
    },
});

export default userSlice.reducer;
