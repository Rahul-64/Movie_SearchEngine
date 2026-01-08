import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();


// subscribing global context
export const Usemoviecontext = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("useMovieContext must be used inside a MovieProvider");
  }

  return context;
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  //check any favorite is there in localstorage or not
  useEffect(() => {
    const favstrore = localStorage.getItem("favorites");

    if (favstrore) {
      setFavorites(JSON.parse(favstrore));
    }
  }, []);

  //add new favorites in local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addtofavorites = (movie) => {
    setFavorites(prev => [...prev, movie]);
  };

  const removetofavorites = (movieId) => {
    setFavorites(prev => prev.filter((movie) => movie.id !== movieId));
  };

  const isfavorites = (movieId) => {
    return favorites.some(movie => movie.id === movieId);
  };

  const value = {
    favorites,
    addtofavorites,
    removetofavorites,
    isfavorites,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
