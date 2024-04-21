import React, { useState } from 'react';
import MovieItem from '../../types/MovieItem';
import {  Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import MovieDetailsDialog from './MovieDetailsDialog';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { useDispatch } from 'react-redux';
import { addMovieToBookmark, removeMovieFromBookmark } from '../../redux/slices/BookmarkSlice';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
interface MovieCardProps {
  movie: MovieItem;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleBookmark = () => {
    const isBookmarkPresent = Object.prototype.hasOwnProperty.call(movie, 'isBookmark');
   
   if (isBookmarkPresent && movie.isBookmark) {
    let newMovieWithBookmart={...movie,isBookmark:false}
    dispatch(removeMovieFromBookmark(newMovieWithBookmart));
  } else {
    let newMovieWithBookmart={...movie,isBookmark:true}
    dispatch(addMovieToBookmark(newMovieWithBookmart));
  }

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card style={{ display: 'flex', marginBottom: '20px', flexDirection: 'column', width: 300, height: 400 ,cursor:'pointer'}}>
        <CardMedia
          style={{ width: 300, height: 250 }}
          image={movie.big_image}
          title={movie.title}
        />
        <div style={{ flex: '1 0 auto' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {movie.title}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StarIcon style={{ marginRight: '5px' }} />
              <Typography variant="body2" color="textSecondary" component="p">
                {movie.rating}
              </Typography>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Typography variant="body2" color="textSecondary" component="p">
              Ranking: {movie.rank}
            </Typography>
            <div onClick={handleBookmark}>
              {Object.prototype.hasOwnProperty.call(movie, 'isBookmark') && movie.isBookmark?<TurnedInIcon/>:<TurnedInNotIcon/>}
            
            </div>
            </div>

          </CardContent>
          <CardActions>
      <Button onClick={handleClickOpen} size="small">View Details</Button>
    </CardActions>
        </div>
      </Card>

      <MovieDetailsDialog open={open} onClose={handleClose} movie={movie} />
    </>
  );
};

export default MovieCard;
