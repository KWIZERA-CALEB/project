import axios, { AxiosError } from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Participants } from '@/utils/types'

interface ApiState {
    loading: boolean;
    error: string | null;
    data: Participants[] | null;
    participants: Participants | null;
}

const initialState: ApiState = {
    data: [],
    loading: false,
    participants: null,
    error: null,
};


// Fetch participants
export const fetchParticipants = createAsyncThunk(
    'challenges/fetchParticipants',
    async (url: string, { rejectWithValue }) => {
      try {
        const response = await axios.get(url);
        console.log('Participants:', response.data);
        return response.data.participants;
      } catch (error) {
        if (error instanceof AxiosError) {
          return rejectWithValue(error.response?.data || error.message);
        }
        return rejectWithValue("An unknown error occurred");
      }
    }
  );

const participantsSlice = createSlice({
    name: 'participants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // Fetch participants
      .addCase(fetchParticipants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParticipants.fulfilled, (state, action: PayloadAction<Challenge[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchParticipants.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else if (action.payload && typeof action.payload === 'object' && 'message' in action.payload) {
          state.error = (action.payload as { message: string }).message;
        } else {
          state.error = 'An unknown error occurred';
        }
      })
    }
})

export default participantsSlice.reducer;