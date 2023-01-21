/* eslint-disable import/no-cycle */
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Divider, List, Input, Space, Row } from 'antd';
import { generalStyling } from './MainPage';
import { ThemeContext } from '../App';

const SearchResults = () => {
    const [search, setSearch] = useState('');
    const [allFilms, setAllFilms] = useState([]);
    const { theme, setTheme } = useContext(ThemeContext);

    const searchResultsStyling = {
        ...(theme === 'lightSide'
            ? generalStyling.lightSide
            : generalStyling.darkSide),
    };

    // const [selectedMovie, setSelectedMovie] = useState(undefined);
    const swApiUrl = 'https://swapi.py4e.com/api/films';

    useEffect(() => {
        fetch(swApiUrl)
            .then(response => response.json())
            .then(data => setAllFilms(data.results))
            // eslint-disable-next-line no-console
            .catch(console.error());
    }, []);

    const searchResults = allFilms
        .sort((a, b) => {
            if (a.episode_id < b.episode_id) return -1;
        })
        .filter(i => {
            const { title } = i;

            const regex = new RegExp(search, 'ig');

            return title.toString().search(regex) !== -1;
        });

    // You need not display planets, starships, vehicles and species or characters.
    return (
        <>
            <Card style={searchResultsStyling}>
                <Row
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Col
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Space direction="vertical" />
                    </Col>
                </Row>

                <Input
                    placeholder="Start typing to search a movie!"
                    justifyContent="center"
                    onChange={e => setSearch(e.target.value)}
                />
                <List
                    dataSource={searchResults}
                    itemLayout="vertical"
                    renderItem={item => (
                        <Row
                            style={{
                                width: '100',
                                justifyContent: 'center',
                                margin: '1em',
                            }}
                            direction="vertical"
                            title={item.episode_id}
                        >
                            <Button>
                                {' '}
                                <Link
                                    to={`/movieinfo/${item.episode_id}`}
                                    state={{ item }}
                                >
                                    {item.title}
                                </Link>
                            </Button>
                        </Row>
                    )}
                />
            </Card>
        </>
    );
};

export default SearchResults;
