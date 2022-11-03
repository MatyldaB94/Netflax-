import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useState, useEffect } from 'react';
import MoviesList from './components/MoviesList';
import MovieTile from './components/MovieTile';
import requests from './components/requests';
import axios from './axios';
import MoviesListCategory from './components/MoviesListCategory';

function App() {
  const [netflixOriginalMovies, setNetflixOriginalMovies] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [topRatedMovies, setRatedMovies] = useState([])
  const [actionMovies, setActionMovies] = useState([])
  const [comedyMovies, setComedyMovies] = useState([])
  const [horrorMovies, setHorrorMovies] = useState([])

  const fetchMovies = async () => {
    const netflixOriginalRequest = await axios.get(requests.fetchNetflixOriginals);
    const allNetflixOriginalMovies = netflixOriginalRequest.data.results
    setNetflixOriginalMovies(allNetflixOriginalMovies)

    const trendingRequest = await axios.get(requests.fetchTrending);
    const trendingMovies = trendingRequest.data.results
    setTrendingMovies(trendingMovies)

    const topRatedRequest = await axios.get(requests.fetchTopRated);
    const topRatedMovies = topRatedRequest.data.results
    setRatedMovies(topRatedMovies)

    const actionRequest = await axios.get(requests.fetchActionMovies)
    const actionMovies = actionRequest.data.results
    setActionMovies(actionMovies)

    const comedyRequest = await axios.get(requests.fetchComedyMovies)
    const comedyMovies = comedyRequest.data.results
    setComedyMovies(comedyMovies)

    const horrorRequest = await axios.get(requests.fetchHorrorMovies)
    const horrorMovies = horrorRequest.data.results
    setHorrorMovies(horrorMovies)


  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero movies={netflixOriginalMovies} />
      <MoviesListCategory title="NetflixOriginals">
        <MoviesList movies={netflixOriginalMovies} />
      </MoviesListCategory>
      <MoviesListCategory title="Trending">
        <MoviesList movies={trendingMovies} />
      </MoviesListCategory>
      <MoviesListCategory title="Top Rated">
        <MoviesList movies={topRatedMovies} />
      </MoviesListCategory>
      <MoviesListCategory title="Action Movies">
        <MoviesList movies={actionMovies} />
      </MoviesListCategory>
      <MoviesListCategory title="Comedy Movies">
        <MoviesList movies={comedyMovies} />
      </MoviesListCategory>
      <MoviesListCategory title="Horror Movies">
        <MoviesList movies={horrorMovies} />
      </MoviesListCategory>
    </div>
  );
}
export default App;

// paginacja - api zwraca nam pierwszą część danych np. pierwszych 20 rekordów
// jeśli chcemy zaciągnąć więcej to ponawiamy request do API tylko podając query param.
// kttóre oznacza, że chcemy kolejną stronę 