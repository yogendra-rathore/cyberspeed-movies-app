import { createSlice } from "@reduxjs/toolkit";
import MovieItem from "../../types/MovieItem";

interface BookmarkState {
  movies: MovieItem[];
}

const initialState: BookmarkState = {
  movies: [],
};

const BookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addMovieToBookmark(state, action) {
        const isMovieAlreadyPresent = state.movies.find((item) => item.id === action.payload.id);
        if(!isMovieAlreadyPresent){
            state.movies.push(action.payload);
        }
    },
    removeMovieFromBookmark(state, action) {
        let tempData:MovieItem[]=state.movies;
        tempData = tempData.filter(
        (movie) => movie.id !== action.payload.id);
        state.movies=tempData;
    },
  },
});

export const { addMovieToBookmark, removeMovieFromBookmark } = BookmarkSlice.actions;
export default BookmarkSlice.reducer;
