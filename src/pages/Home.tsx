import Layout from "../layout";
import { Box, InputAdornment, InputBase, Paper } from "@mui/material";
import SearchIcon from "../assets/icons/icon-search.svg";
import { SetStateAction, useEffect, useState } from "react";
import Loader from "../components/utility/Loader";
import movieServices from "../services/app.movieService";
import MovieItem from "../types/MovieItem";
import Movies from "../components/movies/Movies";
import { useDispatch } from "react-redux";
import { updateMoviesList } from "../redux/slices/MoviesSlice";

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);
  const [moviesList, setMoviesList] = useState<MovieItem[]>([]);
  const [searchList, setSearchList] = useState<MovieItem[]>([]);
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    const searchQuery = e.target.value;
    setSearch(e.target.value);

    if (searchQuery === "") {
      setSearchList(moviesList);
    } else {
      const newList = moviesList.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchList(newList);
    }
  };
  useEffect(() => {
    movieServices
      .fetchMovies()
      .then((moviesList) => {
        setLoader(false);
        setMoviesList(moviesList);
        dispatch(updateMoviesList(moviesList));
        setSearchList(moviesList);
      })
      .catch((err: any) => {
        console.log("Error", err);
        alert("API is not available");
      });
  }, []);

  return (
    <Layout>
      <Box sx={{ position: "sticky", top: 0, zIndex: 999 }}>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies"
            sx={{
              ml: 1,
              mb: 3,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      {loader === true ? <Loader /> : <Movies moviesList={searchList} />}
      {moviesList.length > 0 &&
        search.trim() !== "" &&
        searchList.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 50,
              color: "red",
            }}
          >
            No Related Movie Found for Title '{search}'
          </div>
        )}
    </Layout>
  );
}

export default Home;
