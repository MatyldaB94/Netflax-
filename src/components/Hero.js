import React from "react";
import './Hero.scss'
import { getRandomArrayElement } from "./helpers";

function Hero(props) {

    if (props.movies === undefined || props.movies.length === 0) {
        return null
    }
    const randomMovie = getRandomArrayElement(props.movies)
    const title = randomMovie.original_name
    const description = randomMovie.overview


    return (

        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}>
            <div>
                <button className="play-info-button">Play</button>
                <button className="play-info-button">Info</button>
            </div>
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="description">
                <h3>{description}</h3>
            </div>


        </header>
    )
}

export default Hero