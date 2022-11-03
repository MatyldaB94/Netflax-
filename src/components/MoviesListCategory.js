import './MoviesListCategory.scss'

const MoviesListCategory = (props) => {
    return (
        <div className="movies-list-category">
            <h3>{props.title}</h3>
            <div>{props.children}</div>
        </div>
    )
}

export default MoviesListCategory