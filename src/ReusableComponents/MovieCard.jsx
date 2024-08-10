import React from 'react';
import {  useNavigate } from 'react-router-dom';
import styles from './card.module.css';
import { IoMdStarOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../Redux/actions/favoriteActions';
import { FaStar } from 'react-icons/fa';
import { Rating } from 'primereact/rating';
import { Knob } from 'primereact/knob';
import { Badge } from 'react-bootstrap';


export default function MovieCard ({ movie }) {
  const dispatch = useDispatch();
    const navigate =useNavigate()
    const isFav = useSelector ((state)=> state.favorites.favorites.find((fav)=> fav?.id===movie.id))
    const handleImageClick = () => {
      navigate(`/movie/${movie.id}`); 
    };
  
  const handleFavoriteClick = () => {
    dispatch(isFav ? removeFromFavorites(movie.id) : addToFavorites(movie));
  };
  return (
    <div className={`pb-0 ${styles.card}`}>
      <Badge bg="info"  style={{position:"absolute" ,top:0, right:"10px" ,fontSize:"20px" ,textAlign:"center"}}>{movie.original_language}</Badge>
      <img onClick={()=>handleImageClick(movie)} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{cursor:"pointer"}} className={`card-img-top  ${styles.cardImgTop}`} alt={movie.title} />
           <div className={`card-body ${styles.cardBody}`}>
        <h5 className={`card-title ${styles.cardTitle}`}>{movie.title ||movie.name}</h5>
        <div className="text-info d-flex align-items-center  justify-content-between  text-info">
            <Rating value={movie.vote_average /2} readOnly cancel={false} />
          <div style={{backgroundColor:"#40a3cb5e" ,borderRadius:"50%"}}>
          <Knob strokeWidth={5} size={50} textColor='lightblue' readOnly value={Math.round(movie.vote_average)} valueColor="#48d1cc" rangeColor="#708090" max={10} valueTemplate={'{value}'} />
          </div>
        </div>
       
        <div className=" d-flex  justify-content-between align-items-center text-secondary">
          {movie.release_date ||movie.first_air_date}
          <p className="btn btn-link mt-2 " onClick={handleFavoriteClick} title='Favorite'>
          {isFav? <FaStar  fontSize={"32px"} color='gold' />: <IoMdStarOutline color='gold' fontSize={"32px"}/>}
        </p>
        </div>
      </div>
    </div>
  );
};

