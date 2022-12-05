import React, { useState, useEffect } from 'react';
import { Input, Typography } from 'antd';

const { Title } = Typography;
const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    const [allFilms, setAllFilms] = useState([]);

    const swApiUrl = 'https://swapi.py4e.com/api/films';

    useEffect(() => {
        fetch(swApiUrl)
            .then(response => response.json())
            .then(data => setAllFilms(data.results))
            .catch(console.error());
    }, []);

    return (
        <>
            <Title>searchForce</Title>

            <Input
                placeholder="Start typing to search a movie!"
                onChange={e => setSearchValue(e.target.value)}
            />
        </>
    );
};

export default SearchBar;
