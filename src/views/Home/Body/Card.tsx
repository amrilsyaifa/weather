import React from 'react';
import { TiWeatherSnow } from 'react-icons/ti';
import { Card } from 'components/Card';
import { ContentCard, Text } from './Styles';

const CardComponent = () => {
    return (
        <Card>
            <Card.Body>
                <ContentCard>
                    <Text fontSize="24px" fontWeight="bold" paddingBottom="20px">
                        Friday
                    </Text>
                    <Text fontSize="20px" color="#686868" paddingBottom="20px">
                        March 1st, 1:00 pm
                    </Text>
                    <TiWeatherSnow style={{ fontSize: 100 }} />
                    <Text fontSize="26px" fontWeight="bold" paddingBottom="20px" paddingTop="20px">
                        36 F
                    </Text>
                    <Text fontSize="16px" fontWeight="bold">
                        Clear Sky
                    </Text>
                </ContentCard>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
