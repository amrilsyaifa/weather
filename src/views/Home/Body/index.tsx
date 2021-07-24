import React from 'react';
import Card from './Card';
import { Container, Content, Wrapper, Text } from './Styles';

const Body = () => {
    return (
        <Container>
            <Text fontSize="24px" color="#686868">
                New York, US
            </Text>
            <Content>
                <Wrapper>
                    <Card />
                </Wrapper>
                <Wrapper>
                    <Card />
                </Wrapper>
                <Wrapper>
                    <Card />
                </Wrapper>
                <Wrapper>
                    <Card />
                </Wrapper>
                <Wrapper>
                    <Card />
                </Wrapper>
            </Content>
        </Container>
    );
};

export default Body;
