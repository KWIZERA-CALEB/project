import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  challengeDetails: null,
  error: null,
};

export const fetchChallenges = createAsyncThunk('challenges/fetchChallenges', async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      console.log("Response:", response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
});

export const fetchChallengeDetails = createAsyncThunk(
  'challenges/fetchChallengeDetails',
  async ({ url, id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/${id}`);
      console.log("Challenge Details Response:", response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createChallenge = createAsyncThunk(
  'challenges/createChallenge',
  async ({ url, challengeData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(url, challengeData);
      console.log("Create Challenge Response:", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteChallenge = createAsyncThunk(
  'challenges/deleteChallenge',
  async ({ url, id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log("Delete Challenge Response:", response);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const challengesSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetch challenges states
      .addCase(fetchChallenges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallenges.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchChallenges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Single Challenge Details
      .addCase(fetchChallengeDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallengeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.challengeDetails = action.payload;
      })
      .addCase(fetchChallengeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete challenge
      .addCase(deleteChallenge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteChallenge.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((challenge) => challenge.id !== action.payload);
      })
      .addCase(deleteChallenge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // create challenge
      .addCase(createChallenge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createChallenge.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(createChallenge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});



export default challengesSlice.reducer;
