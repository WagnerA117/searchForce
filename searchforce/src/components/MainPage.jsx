import React, { useState, useEffect } from 'react';
import {
    List,
    Card,
    Divider,
    Input,
    Typography,
    Modal,
    Row,
    Space,
} from 'antd';

const { Title } = Typography;

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

    console.log(selectedMovie);
    return (
        <>
            <Title>searchForce</Title>

            <Input
                placeholder="Start typing to search a movie!"
                onChange={e => setSearch(e.target.value)}
            />

            <List
                dataSource={searchResults}
                grid={{
                    gutter: 10,
                    column: 2,
                }}
                renderItem={item => (
                    <Card
                        title={item.episode_id}
                        onClick={() => {
                            setSelectedMovie(item);
                        }}
                    >
                        {' '}
                        {item.title}
                    </Card>
                )}
            />

            <Modal
                open={selectedMovie !== undefined}
                onCancel={() => setSelectedMovie(undefined)}
            >
                <Space style={{ width: '100%', justifyContent: 'center' }}>
                    <Title>{selectedMovie?.title}</Title>
                </Space>

                <Divider />
            </Modal>
        </>
    );
};

export default MainPage;
