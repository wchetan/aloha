import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TripState {
  trips: Trip[];
  loading: boolean;
  error: string | null;
}

interface Trip {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
}

const initialState: TripState = {
  trips: [],
  loading: false,
  error: null,
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    fetchTripsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTripsSuccess(state, action: PayloadAction<Trip[]>) {
      state.trips = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchTripsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchTripsStart, fetchTripsSuccess, fetchTripsFailure} =
  tripSlice.actions;

export default tripSlice.reducer;
