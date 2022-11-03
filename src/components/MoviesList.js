import MovieTile from "./MovieTile"
import './MoviesList.scss'

function MoviesList(props) {
    return <div className="movies-list">{props.movies.map(
        (movie) => {

            return <MovieTile key={movie.id} movie={movie} />
        }
    )}</div >
}

export default MoviesList



