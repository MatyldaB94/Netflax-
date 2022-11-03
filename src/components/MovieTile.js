import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './MovieTile.scss'


const base_url = "https://image.tmdb.org/t/p/original";

function MovieTile(props) {
    const imagePath = base_url + props.movie.backdrop_path

    return (
        <div className="movie-tile">
            <img className="movie-tile-img" src={imagePath}></img>
        </div>
    )
}

export default MovieTile;

