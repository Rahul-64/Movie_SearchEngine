import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const Usemoviecontext = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("useMovieContext must be used inside a MovieProvider");
  }

  return context;
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  //load hote hi check kro , favorites hai ki nhi in localstorage
  useEffect(() => {
    const favstrore = localStorage.getItem("favorites");

    if (favstrore) {
      setFavorites(JSON.parse(favstrore));
    }
  }, []);

  //agar new favorites add hua ho toh, localstorage mein add kro
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
