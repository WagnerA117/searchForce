/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import MainPage from './components/MainPage';
import MovieInfo from './components/MovieInfo';
import SearchResults from './components/SearchResults';
import './index.css';

export const ThemeContext = createContext('lightSide');
const App = () => {
    // you can pass in the context vis the route!

    // <Route path="/" element={<MainPage />} />
    // <Route path="/movieinfo/:episode_id" element={<MovieInfo />} />

    const [theme, setTheme] = useState('lightSide');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <MainPage />

            <Routes>
                <Route exact path="/" element={<SearchResults />} />

                <Route
                    exact
                    path="/movieinfo/:episode_id"
                    element={<MovieInfo />}
                />
            </Routes>
        </ThemeContext.Provider>
    );
};

export default App;
