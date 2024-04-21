import axios, { AxiosResponse } from "axios";
import MovieItem from "../types/MovieItem";

const BASE_URL='https://imdb-top-100-movies.p.rapidapi.com/';
const API_KEY='cfd3c1d46fmsh505797ce3687961p1e8e60jsnd7db16fbc24a'

const movieServices={

    fetchMovies: async (): Promise<MovieItem[]> => {
        const options = {
            method: 'GET',
            url: BASE_URL,
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
          };
        try {
            const response: AxiosResponse<MovieItem[]> = await axios.request(options);
            return response.data;
          } catch (error) {
            console.error('Error fetching movies:', error);
            return []; // Return empty array in case of error
          }
    }


}

export default movieServices;