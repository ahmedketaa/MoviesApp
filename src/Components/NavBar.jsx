import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { LanguageContext } from "../Context/languageContext";
import { fetchTvShows } from "../Redux/reducer/tvShows";
import { setLanguage } from "../Redux/Slice/language";

export default function NavBar() {
  const favoriteCount = useSelector(
    (state) => state.favorites.favorites.length
  );
  const dispatch = useDispatch();
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const page = 1; 
  const translation  = useSelector((state) => state.language.translation)
  
  const handleLangChange = (lang) => {
    setContextLang(lang);
    dispatch(fetchTvShows(lang, page)); 
    dispatch(setLanguage(lang));
    

  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TMV
        </Link>
        <Link className="nav-link text-light" to="/">
          {translation.movies}
        </Link>
        <Link className="nav-link text-light" to="/tv-shows">
        {translation.tv}
        </Link>
        <Link className="nav-link text-light" to="/people">
          {translation.people}
        </Link>
        <Link to="/favorites" className="nav-link text-warning">
          {translation.Favorites} {`(${favoriteCount})`}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="dropdown-custom-components"
                  variant="secondary"
                >
                  {contextLang.charAt(0).toUpperCase() + contextLang.slice(1)}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    eventKey="en"
                    onClick={() => handleLangChange("en")}
                    active={contextLang === "en"}
                  >
                    En
                  </Dropdown.Item>
                 
                  <Dropdown.Item
                    eventKey="ar"
                    onClick={() => handleLangChange("ar")}
                    active={contextLang === "ar"}
                  >
                    AR
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                {translation.login}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                {translation.register}
                
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
