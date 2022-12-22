import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Col, Divider, Typography, Space } from 'antd';

const { Text, Title } = Typography;

const MovieInfo = () => {
    const location = useLocation();

    const { item } = location.state;
    // You need not display planets, starships, vehicles and species or characters.

    return (
        <>
            <Card style={{ display: 'flex', justifyContent: 'center' }}>
                <p>My centered content</p>
            </Card>

            <Space>
                <Col
                    style={{
                        backgroundColor: 'blue',
                        padding: '8px',
                        justifyContent: 'center',
                    }}
                    span={24}
                >
                    <Card style={{ display: 'flex', justifyContent: 'center' }}>
                        <Title
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            Episode {item.episode_id}:{item.title}
                        </Title>

                        <Divider />
                        <Title
                            level={4}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {' '}
                            Directed By
                        </Title>

                        <Text
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {item.director} and produced by {item.producer}{' '}
                            {item.producer}{' '}
                        </Text>

                        <Title
                            level={4}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {' '}
                            Opening Crawl
                        </Title>

                        <Text>{item.opening_crawl}</Text>

                        <Title
                            level={4}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {' '}
                            Release Date: {item.release_date}{' '}
                        </Title>
                        <Text
                            level={4}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
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
