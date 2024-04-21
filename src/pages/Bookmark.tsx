import Layout from "../layout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Movies from "../components/movies/Movies";
import MovieItem from "../types/MovieItem";

function Bookmark() {
  const bookMarkMoviesList =
    useSelector((state: RootState) => state.bookmark.movies) || [];

  return (
    <Layout>
      <Movies moviesList={bookMarkMoviesList as MovieItem[]} />
      {bookMarkMoviesList.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 50,
            color: "red",
          }}
        >
          No Movie Bookmarked Currently
        </div>
      )}
    </Layout>
  );
}

export default Bookmark;
