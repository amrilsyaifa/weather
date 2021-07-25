import React, { useEffect, useState } from 'react';
import Card from './Card';
import useWeather from 'hooks/useWeather';
import useInterval from 'hooks/useInterval';
import { Container, Content, Wrapper, Text } from './Styles';
import history from 'routerHistory';

const Body = () => {
    const { getData, list, city } = useWeather();

    // delay for 5 minutes
    const [delay] = useState<number>(300000);
    const [isDidMount, setIsDidMount] = useState<boolean>(false);

    useEffect(() => {
        getData();
        setIsDidMount(true);
    }, []);

    useInterval(
        () => {
            // Your custom logic here
            getData();
        },
        // Delay in milliseconds or null to stop it
        isDidMount ? delay : null,
    );

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
