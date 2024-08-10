import React, { useState, useEffect } from 'react';
import { getMovies, searchMovies } from '../Utilities';
import MovieCard from '../ReusableComponents/MovieCard';
import Loading from '../ReusableComponents/Loading';

export default  function MoviesList ({ category ,language}) {
  console.log(language);
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const fetchMovies = async () => {
    setLoading(true);
    const response = isSearching ? 
      await searchMovies(searchQuery, page) : 
      await getMovies(category, page,language);
    setMovies(response.data.results);
    console.log(response.data.results);
    
    setLoading(false);

  };
  useEffect(() => {
    fetchMovies();
  }, [category, page ,isSearching,language]);

  const handleSearch = () => {
    
    if (searchQuery) {
      setIsSearching(true)
      fetchMovies()
    } else {
      setIsSearching(false);
    }
  };
  if (loading) return <Loading />;

  return (
    <div className="mb-5">
        
         <div className="input-group mb-3">
         <input
            type="text"
            className="form-control"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            
          />
            <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="row">
        {movies.map(movie => (
          <div style={{height:"600px"}} className="col-md-3" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between pb-5">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn btn-primary ">Previous</button>
        <button onClick={() => setPage(page + 1)} className="btn btn-primary">Next</button>
      </div>
    </div>
  );
};


