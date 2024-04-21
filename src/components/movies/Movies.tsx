import React from 'react'
import MovieItem from '../../types/MovieItem'
import { Grid, Paper } from '@mui/material';
import MovieCard from './MovieCard';

interface MoviesProps {
  moviesList: MovieItem[]; 
}

const Movies = ({ moviesList }: MoviesProps) => {
  
  return (
    <Grid container spacing={2}>
      {moviesList.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieCard movie={item} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Movies