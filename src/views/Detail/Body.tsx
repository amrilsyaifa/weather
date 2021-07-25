import React from 'react';
import moment from 'moment';
import Card from '../Home/Body/Card';
// import useWeather from 'hooks/useWeather';
import { ContainerBody, Content, Text, Wrapper } from './Styles';
import { BodyProps } from './types';

const Body: React.FC<BodyProps> = ({ data }) => {
    return (
        <ContainerBody>
            <Text fontSize="24px" color="#686868">
                {moment(data.date).format('MMMM Do YYYY')}
            </Text>
            <div />
            <Content>
                {data.data?.map((val, idx) => {
                    return (
                        <Wrapper key={idx}>
                            <Card data={val} />
                        </Wrapper>
                    );
                })}
            </Content>
        </ContainerBody>
    );
};

export default Body;
