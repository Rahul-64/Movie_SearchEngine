import React from 'react'
import "../css/MovieCard.css" 
import { Usemoviecontext } from '../contexts/MovieContext'



const MovieCard = ({movie}) => {
  const {isfavorites , addtofavorites, removetofavorites } = Usemoviecontext();
  const favorite = isfavorites(movie.id);

  function onFavoriteCLick(e){
   e.preventDefault()
   if(favorite) removetofavorites(movie.id);
   else addtofavorites(movie);
}

  return (
    <div className='movie-card'>
         <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
        <div className='movie-overlay'>
            <button className= {`favorite-btn ${favorite ? "active" : ""} `} onClick={onFavoriteCLick}>
                ♥
            </button>
        </div>
        <div className='movie-info'>
            <h3> {movie.title}</h3>
            <p> {movie.release_date?.split("-")[0]} </p>
           
        </div>

    </div>
  )
}

export default MovieCard