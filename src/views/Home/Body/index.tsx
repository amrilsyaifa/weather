import React, { useEffect } from 'react';
// import Api from 'utils/Api';
import Card from './Card';
import { Container, Content, Wrapper, Text } from './Styles';

const Body = () => {
    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        // const result = await Api('GET', 'forecast?q=new%20york');
        // console.log('isi result ', result);
    };
    return (
        <Container>
            <Text fontSize="24px" color="#686868">
                New York, US
            </Text>
            <div />
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
