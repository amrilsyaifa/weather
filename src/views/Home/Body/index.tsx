import React, { useEffect } from 'react';
import Card from './Card';
import useWeather from 'hooks/useWeather';
import { Container, Content, Wrapper, Text } from './Styles';
import history from 'routerHistory';

const Body = () => {
    const { getData, list, city } = useWeather();

    useEffect(() => {
        getData();
    }, []);

    const onNavigate = (value) => {
        history.push({
            pathname: '/detail',
            search: `?date=${value}`,
        });
    };

    return (
        <Container>
            <Text fontSize="24px" color="#686868">
                {city.name}, {city.country}
            </Text>
            <div />
            <Content>
                {list?.map((val, idx) => {
                    return (
                        <Wrapper key={idx} onClick={() => onNavigate(val.date)} cursor="pointer">
                            <Card data={val} />
                        </Wrapper>
                    );
                })}
            </Content>
        </Container>
    );
};

export default Body;
