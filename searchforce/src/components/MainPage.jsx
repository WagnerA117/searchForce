import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    Col,
    Divider,
    Input,
    List,
    Row,
    Switch,
    Typography,
} from 'antd';

const { Text, Title } = Typography;

const MainPage = () => {
    const [search, setSearch] = useState('');

    const [allFilms, setAllFilms] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(undefined);

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
            <Card>
                <Row
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <Col
                        style={{
                            backgroundColor: 'blue',
                            padding: '8px',
                            justifyContent: 'center',
                        }}
                        span={8}
                    >
                        <Link
                            to={{
                                pathname: '/',
                            }}
                        >
                            <Title>searchForce</Title>
                        </Link>
                    </Col>

                    <Col
                        style={{
                            backgroundColor: 'red',
                        }}
                        span={4}
                    >
                        <Text> Dark Side</Text>
                        <Switch />
                        <Text> Light Side</Text>
                    </Col>
                </Row>

                <Input
                    placeholder="Start typing to search a movie!"
                    onChange={e => setSearch(e.target.value)}
                />

                <Divider />
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

            <Divider />
        </>
    );
};

export default MainPage;
