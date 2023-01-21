/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Switch, Typography, Space } from 'antd';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../App';

const { Title, Text } = Typography;

export const generalStyling = {
    darkSide: {
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'center',
        font: 'Star Wars',
        width: '100%',
    },
    lightSide: {
        backgroundColor: 'rgb(37, 118, 195)',
        color: 'black',
        justifyContent: 'center',
        font: 'Star Wars',
        width: '100%',
    },
};

const MainPage = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleToggle = () => {
        setTheme(theme === 'lightSide' ? 'darkSide' : 'lightSide');
    };

    const mainPageStyle = {
        ...(theme === 'lightSide'
            ? generalStyling.lightSide
            : generalStyling.darkSide),
    };
    return (
        <>
            <Card style={mainPageStyle}>
                <Row>
                    <Col span={8}>
                        {' '}
                        <Space>
                            <Switch onChange={handleToggle} />
                        </Space>
                    </Col>
                    <Col
                        style={{ justifyContent: 'center', display: 'flex' }}
                        span={8}
                    >
                        {' '}
                        <Link
                            to={{
                                pathname: '/',
                            }}
                        >
                            <Title style={mainPageStyle}>searchForce</Title>
                        </Link>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default MainPage;
