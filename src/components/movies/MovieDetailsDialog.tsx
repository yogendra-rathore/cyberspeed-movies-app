import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, CardMedia } from '@mui/material';
import MovieItem from '../../types/MovieItem';
import StarIcon from '@mui/icons-material/Star';

interface MovieDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  movie: MovieItem;
}

const MovieDetailsDialog: React.FC<MovieDetailsDialogProps> = ({ open, onClose, movie }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{fontWeight:'600'}}>{movie.title}</DialogTitle>
      <DialogContent>
        <CardMedia
          component="img"
          image={movie.big_image}
          alt={movie.title}
          style={{ height: 300, width: '100%', objectFit: 'cover',marginBottom:5 }}
        />
        <Typography gutterBottom>
          <b>Description:</b> {movie.description}
        </Typography>
        <Typography gutterBottom>
          <b>Genre: </b>{movie.genre.join(', ')}
        </Typography>
        <div style={{ display: 'flex'}}>
          <Typography gutterBottom>
            <b>Rating:</b> {movie.rating}
          </Typography>
          <StarIcon style={{color:'darkgoldenrod'}} />
        </div>
        <Typography gutterBottom>
          <b>IMDB Link:</b> {movie.imdb_link}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDetailsDialog;
