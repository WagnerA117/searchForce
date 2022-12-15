import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import MovieInfo from './components/MovieInfo';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/movieinfo/:episode_id" element={<MovieInfo />} />
            </Routes>
        </>
    );
};

export default App;
