import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../ReusableComponents/MovieCard';
import { Alert } from 'react-bootstrap';

export default function Favorites(){
  const favoriteMovies = useSelector((state) => state.favorites.favorites);
  if(favoriteMovies.length===0){
    return(
      <>
      <div className="container">
      <Alert className='d-flex align-items-center justify-content-center' style={{height:"100px",textAlign:"center"}} variant={'info'}>
         <p className=' text-center'>
         There Is No Favorite Movies
         </p>
        </Alert>
      </div>
      
      </>
    )
  }
  return (
    <div className="container">
      <h1>Favorite Movies</h1>
      <div className="row mb-5">
        {favoriteMovies.map((movie) => (
          <div className="col-md-3" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

