import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Movie from '../components/Movie';
import './Home.css'

function Home() {
  const [movie, setMovie] = useState({
    isLoading : true,
    movies : [],
  })

  const getMovies = async () => {
    const {
      data : {
        data : { movies },
        },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    setMovie({
      isLoading : false,
      movies,
    });
  }

  useEffect(() => getMovies(), []);

  return (
    <selection className="container">
    {movie.isLoading ? (
      <div className="loader">
        <span className="loader__text">'Loading...'</span>
        </div>
        ) :  (
          <div className="movies">
          {movie.movies.map((movie) =>
     (<Movie
        key={movie.id} 
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image} 
        genres={movie.genres}
        />
        ))}
        </div>
        )}
    </selection>
  )
}

export default Home
