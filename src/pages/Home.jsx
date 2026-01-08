import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchquery, setSearchquery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingMovies = async () => {
      try {
        const popularmovies = await getPopularMovies();
        setMovies(popularmovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadingMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    // alert(searchquery);
    if (!searchquery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResult = await searchMovies(searchquery);
      setMovies(searchResult);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("failed to search movies.....");
    } finally {
      setLoading(false);
    }

    // setSearchquery("")
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Searching for movies....."
          className="search_input"
          value={searchquery}
          onChange={(e) => setSearchquery(e.target.value)}
        />
        <button type="submit" className="search-button">
          {" "}
          Search
        </button>
      </form>
      <div className="movies-grid">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          movies
            .filter((movie) =>
              movie.title?.toLowerCase().startsWith(searchquery.toLowerCase())
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
        )}
      </div>
    </div>
  );
}

export default Home;
