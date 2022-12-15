import React from 'react';
import { useLocation } from 'react-router-dom';

const MovieInfo = props => {
    const location = useLocation();

    console.log(location);
    console.log(props, 'this si the thing');
    return (
        <div>
            <h1> WE have moved!</h1>
        </div>
    );
};

export default MovieInfo;
