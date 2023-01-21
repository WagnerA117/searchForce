/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Col, Divider, Typography, Space } from 'antd';
import { ThemeContext } from '../App';

const { Text, Title } = Typography;

export const generalStyling = {
    darkSide: {
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
    },
    lightSide: {
        backgroundColor: 'rgb(37, 118, 195)',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
    },
};

const MovieInfo = () => {
    const location = useLocation();
    const { theme, setTheme } = useContext(ThemeContext);

    const { item } = location.state;
    const movieInfoStyling = {
        ...(theme === 'lightSide'
            ? generalStyling.lightSide
            : generalStyling.darkSide),
    };
    return (
        <>
            <Space>
                <Col
                    style={{
                        padding: '8px',
                        justifyContent: 'center',
                    }}
                    span={24}
                >
                    <Card style={movieInfoStyling}>
                        <Title style={movieInfoStyling}>
                            Episode {item.episode_id}:{item.title}
                        </Title>

                        <Divider />
                        <Title level={4} style={movieInfoStyling}>
                            {' '}
                            Directed By
                        </Title>

                        <Text style={movieInfoStyling}>
                            {item.director} and produced by {item.producer}{' '}
                            {item.producer}{' '}
                        </Text>

                        <Title level={4} style={movieInfoStyling}>
                            {' '}
                            Opening Crawl
                        </Title>

                        <Text style={movieInfoStyling}>
                            {item.opening_crawl}
                        </Text>

                        <Title level={4} style={movieInfoStyling}>
                            {' '}
                            Release Date: {item.release_date}{' '}
                        </Title>
                        <Text level={4} style={movieInfoStyling}>
                            {' '}
                            <a href={item.url}>
                                {' '}
                                Find more information on the Star Wars Api
                            </a>
                        </Text>
                    </Card>
                </Col>
            </Space>
        </>
    );
};

export default MovieInfo;
