import "../css/Favorites.css"
import MovieCard from "../components/MovieCard";
import { Usemoviecontext } from "../contexts/MovieContext";


function Favorites(){
    const { favorites } = Usemoviecontext();

    if(favorites){
        return (
            <div className="favorites">
                <h2>Your favorites moives</h2>
                <div className="movies-grid">
                    {
                        favorites.map((movie) =>(
                            <MovieCard movie={movie} key={movie.id}/>
                        ))
                    }
                </div>

            </div>
        )
    }

    return <div className="favorites-empty">
        <h2> No favorites right now </h2>

    </div>
}

export default Favorites; 