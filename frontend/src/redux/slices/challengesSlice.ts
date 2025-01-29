import axios, { AxiosError } from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ChallengeFormData, Challenge } from '@/utils/types';

interface UpdateChallengeArgs {
  id: string;
  payload: ChallengeFormData;
}

interface ApiState {
  loading: boolean;
  error: string | null;
  data: Challenge[];
  challengeDetails: Challenge | null;
}

const initialState: ApiState = {
  data: [],
  loading: false,
  challengeDetails: null,
  error: null,
};

// Fetch Challenges
export const fetchChallenges = createAsyncThunk(
  'challenges/fetchChallenges',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

// Fetch Challenge Details
export const fetchChallengeDetails = createAsyncThunk(
  'challenges/fetchChallengeDetails',
  async ({ url, id }: { url: string, id: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/${id}`);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

// Create Challenge
export const createChallenge = createAsyncThunk(
  'challenges/createChallenge',
  async (payload: ChallengeFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/create-challenge`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

// Update Challenge
export const updateChallenge = createAsyncThunk(
  'challenges/updateChallenge',
  async ({ id, payload }: UpdateChallengeArgs, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/update-challenge/${id}`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

// Delete Challenge
export const deleteChallenge = createAsyncThunk(
  'challenges/deleteChallenge',
  async ({ url, id }: { url: string, id: string }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      return id;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch challenges
      .addCase(fetchChallenges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallenges.fulfilled, (state, action: PayloadAction<Challenge[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchChallenges.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else if (action.payload && typeof action.payload === 'object' && 'message' in action.payload) {
          state.error = (action.payload as { message: string }).message;
        } else {
          state.error = 'An unknown error occurred';
        }
      })

      // Single Challenge Details
      .addCase(fetchChallengeDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallengeDetails.fulfilled, (state, action: PayloadAction<Challenge>) => {
        state.loading = false;
        state.challengeDetails = action.payload;
      })
      .addCase(fetchChallengeDetails.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else if (action.payload && typeof action.payload === 'object' && 'message' in action.payload) {
          state.error = (action.payload as { message: string }).message;
        } else {
          state.error = 'An unknown error occurred';
        }
      })

      // Delete Challenge
      .addCase(deleteChallenge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteChallenge.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.data = state.data.filter((challenge) => challenge._id !== action.payload);
      })
      .addCase(deleteChallenge.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else if (action.payload && typeof action.payload === 'object' && 'message' in action.payload) {
          state.error = (action.payload as { message: string }).message;
        } else {
          state.error = 'An unknown error occurred';
        }
      })

      // Update Challenge
      .addCase(updateChallenge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateChallenge.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateChallenge.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else if (action.payload && typeof action.payload === 'object' && 'message' in action.payload) {
          state.error = (action.payload as { message: string }).message;
        } else {
          state.error = 'An unknown error occurred';
        }
      })

      // Create Challenge
      .addCase(createChallenge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createChallenge.fulfilled, (state, action: PayloadAction<Challenge>) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(createChallenge.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else if (action.payload && typeof action.payload === 'object' && 'message' in action.payload) {
          state.error = (action.payload as { message: string }).message;
        } else {
          state.error = 'An unknown error occurred';
        }
      });
  },
});

export default challengesSlice.reducer;
