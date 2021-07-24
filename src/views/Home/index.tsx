import React from 'react';
import Page from 'components/Layout/Page';
import Header from './Header';
import Body from './Body';
import { Container } from './Styles';

const Home = () => {
    return (
        <Page>
            <Container>
                <Header />
                <Body />
            </Container>
        </Page>
    );
};

export default Home;
