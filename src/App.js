// src/App.js
import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Footer from './Components/Footer';
import LoginUser from './Auth/Login';
import AddUser from './Auth/Register';
import { Provider } from 'react-redux';
import MyStore from './Redux/store';
import Favorites from './Pages/Favorite';
import TVShows from './Pages/TvShows';
import People from './Pages/People';
import { LanguageContext } from './Context/languageContext';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const [contextLang, setContextLang] = useState("EN")
  const [themeContext, setThemeContext] = useState("dark")

  return (
    <Provider store={MyStore}>
      <ThemeContext.Provider value={{themeContext, setThemeContext}}>
      <LanguageContext.Provider value={{contextLang, setContextLang}}>
    <BrowserRouter>
      <NavBar />
      <div dir={contextLang=="ar"?"rtl":''}  className={`mt-5 pt-4 custom-transition ${themeContext==="light"?"bg-light text-dark":""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<AddUser />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </LanguageContext.Provider>
    </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
