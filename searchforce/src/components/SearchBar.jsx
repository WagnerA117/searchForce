import React, { useState, useEffect } from 'react';
import { Input, Typography } from 'antd';

const { Title } = Typography;
const SearchBar = () => {
    const [search, setSearch] = useState('');

    const [allFilms, setAllFilms] = useState([]);

    const swApiUrl = 'https://swapi.py4e.com/api/films';

    useEffect(() => {
        fetch(swApiUrl)
            .then(response => response.json())
            .then(data => setAllFilms(data.results))
            .catch(console.error());
    }, []);

    const searchResults = allFilms.filter(i => {
        const { title } = i;

        const regex = new RegExp(search, 'ig');

        return title.toString().search(regex) !== -1;
    });

    return (
        <>
            <Title>searchForce</Title>

            <Input
                placeholder="Start typing to search a movie!"
                onChange={e => setSearch(e.target.value)}
            />
        </>
    );
};

export default SearchBar;
