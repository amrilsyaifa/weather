import React from 'react';
import moment from 'moment';
import { TiWeatherSnow, TiWeatherCloudy } from 'react-icons/ti';
import { WiCloudy, WiCloudyWindy, WiRainMix } from 'react-icons/wi';
import { Card } from 'components/Card';
import { ContentCard, Text } from './Styles';
import { CardProps } from './types';
// import { ConvertToF } from 'helper';

const CardComponent: React.FC<CardProps> = ({ data }) => {
    return (
        <Card>
            <Card.Body>
                <ContentCard>
                    <Text fontSize="24px" fontWeight="bold" paddingBottom="20px">
                        {moment(data.date).format('dddd')}
                    </Text>
                    <Text fontSize="20px" color="#686868" paddingBottom="20px">
                        {moment(data.date_text).format('MMMM Do, h:mm a')}
                    </Text>
                    {data.weather[0].icon === '01d' ? (
                        <TiWeatherSnow style={{ fontSize: 100 }} />
                    ) : data.weather[0].icon === '03d' ? (
                        <WiCloudy style={{ fontSize: 100 }} />
                    ) : data.weather[0].icon === '04d' ? (
                        <WiCloudyWindy style={{ fontSize: 100 }} />
                    ) : data.weather[0].icon === '10d' ? (
                        <WiRainMix style={{ fontSize: 100 }} />
                    ) : (
                        <TiWeatherCloudy style={{ fontSize: 100 }} />
                    )}
                    {/* <TiWeatherSnow style={{ fontSize: 100 }} /> */}
                    <Text fontSize="26px" fontWeight="bold" paddingBottom="20px" paddingTop="20px">
                        {Math.round(data.main.temp)} F
                    </Text>
                    <Text fontSize="16px" fontWeight="bold">
                        {data.weather[0].description}
                    </Text>
                </ContentCard>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;

{
    /* <WiRainMix style={{ fontSize: 100 }} /> */
}
