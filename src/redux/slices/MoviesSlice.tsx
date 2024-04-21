import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MovieItem from "../../types/MovieItem";

interface MoviesState {
  data: MovieItem[] | null;
}

const initialState: MoviesState = {
  data: null,
};

const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateMoviesList(state, action: PayloadAction<MovieItem[]>) {
      state.data = action.payload;
    }
  },
});

export const { updateMoviesList } = MoviesSlice.actions;
export default MoviesSlice.reducer;
