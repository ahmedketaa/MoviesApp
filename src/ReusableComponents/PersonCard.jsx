// src/ReusableComponents/PersonCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.css';

export default function PersonCard({ person }) {
  return (
    <div className={`card ${styles.card}`}>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} 
        className={`card-img-top ${styles.cardImgTop}`} 
        alt={person.name} 
      />
      <div className={`card-body ${styles.cardBody}`}>
        <h5 className={`card-title ${styles.cardTitle}`}>{person.name}</h5>
        <p className={`card-text ${styles.cardText}`}>Known for: {person.known_for_department}</p>
        <p className={`card-text ${styles.cardText}`}>Number of Movies: {person.known_for.length}</p>
        <ul className={styles.Myul}>
          {person.known_for.map(movie => (
            <li className={styles.Myli} key={movie.id}>
              <Link  to={`/movie/${movie.id}`} className={styles.link}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
