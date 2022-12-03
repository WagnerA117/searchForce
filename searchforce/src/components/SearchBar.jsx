import React, { useState } from 'react';
import { Input, Typography } from 'antd';

const { Title } = Typography;

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    console.log(searchValue);
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
