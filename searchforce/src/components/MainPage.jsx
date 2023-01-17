/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Switch, Typography } from 'antd';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../App';

const { Title } = Typography;

export const generalStyling = {
    darkSide: {
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
    },
    lightSide: {
        backgroundColor: 'grey',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
    },
};

const MainPage = () => {
    // You need not display planets, starships, vehicles and species or characters.

    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme);

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
            <Switch onChange={handleToggle} />
            <Card style={mainPageStyle}>
                <Row>
                    <Col>
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
