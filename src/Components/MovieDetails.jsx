import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './movieDetails.module.css'
import { getMovieDetails } from '../Utilities';

export default function MovieDetails () {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovieDetails(id);
      setMovie(response.data);
      console.log(response.data);
      
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={`${styles.container} mb-5`}>
    <h1>{movie.title}</h1>
    <div className={styles.imgContainer}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    </div>
    <div className={styles.details}>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  </div>
  );
};


