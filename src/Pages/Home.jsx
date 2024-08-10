import React, { useContext, useState } from 'react';
import MoviesList from '../Components/MoviesList';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { LanguageContext } from '../Context/languageContext';

export default function Home()  {
  const [category, setCategory] = useState('popular');
  const { contextLang } = useContext(LanguageContext);

  const handleCategoryChange = (category) => {
    setCategory(category);

  };

  
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mb-2 specialH2">{category.replace('_', ' ')} Movies</h2>
      <div className="my-3">
      <div>
      <label htmlFor="categorySelect" className="form-label mr-2 h5">Category</label>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-components" variant="secondary">
          {category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            eventKey="popular"
            onClick={() => handleCategoryChange('popular')}
            active={category === 'popular'}
          >
            Popular
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="top_rated"
            onClick={() => handleCategoryChange('top_rated')}
            active={category === 'top_rated'}
          >
            Top Rated
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="upcoming"
            onClick={() => handleCategoryChange('upcoming')}
            active={category === 'upcoming'}
          >
            Upcoming
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="now_playing"
            onClick={() => handleCategoryChange('now_playing')}
            active={category === 'now_playing'}
          >
            Now Playing
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
      </div>
      </div>
      <MoviesList language={contextLang} category={category} />
    </div>
  );
};


