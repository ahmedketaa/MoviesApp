import React, { useState, useEffect, useContext } from 'react';
import Loading from '../ReusableComponents/Loading';
import MovieCard from '../ReusableComponents/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTvShows } from '../Redux/reducer/tvShows';
import { LanguageContext } from '../Context/languageContext';

export default function TVShows(){
  // const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);
  const tvShows = useSelector((state) => state.tvShows.tvShows);
  

  useEffect(() => {
    // setLoading(true)
    dispatch(fetchTvShows(language ,page));
    setLoading(false)

  }, [dispatch, language ,page]);

  // useEffect(() => {
  //   const fetchTVShows = async () => {
  //     const response = await getTVShows(page);
  //     setTVShows(response.data.results);
  //     setLoading(false);
  //   };
  //   fetchTVShows();
  // }, [page]);

  if (loading) return <Loading />;

  return (
    <div className="container">
        <h2 className='mb-3'>Popular TV Shows</h2>
      <div className="row">
        {tvShows.map(show => (
          <div className="col-md-3" key={show.id}>
            <MovieCard movie={show} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between pb-5 mb-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn btn-primary">Previous</button>
        <button onClick={() => setPage(page + 1)} className="btn btn-primary">Next</button>
      </div>
    </div>
  );
};

