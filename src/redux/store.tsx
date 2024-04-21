import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MoviesSlice from './slices/MoviesSlice';
import BookmarkSlice from './slices/BookmarkSlice';

const store = configureStore({
  reducer: {
    movies: MoviesSlice,
    bookmark: BookmarkSlice
  },
});

const rootReducer = combineReducers({
    movies: MoviesSlice,
    bookmark: BookmarkSlice
  });
export type RootState = ReturnType<typeof rootReducer>;
export default store;
