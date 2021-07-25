import React, { useEffect, useState } from 'react';
import Page from 'components/Layout/Page';
import Header from '../Home/Header';
import { Container } from './Styles';
import { UseQuery, IsEmpty } from 'helpers';
import history from 'routerHistory';
import Body from './Body';
import { LIST_KEY } from 'contexts/WeatherContext';

const Detail = () => {
    const query = UseQuery();

    const [data, setData] = useState({});

    useEffect(() => {
        const queryDate = query.get('date');
        if (IsEmpty(queryDate)) {
            history.push({
                pathname: '/',
            });
        } else {
            const returnLocalStorage = JSON.parse(localStorage.getItem(LIST_KEY));
            const filterByAttribute = returnLocalStorage.find((val) => val.date === queryDate);
            if (IsEmpty(filterByAttribute)) {
                history.push({
                    pathname: '/',
                });
            } else {
                setData(filterByAttribute);
            }
        }
    }, []);

    return (
        <Page>
            <Container>
                <Header withSearch={false} withBack={true} />
                <Body data={data} />
            </Container>
        </Page>
    );
};

export default Detail;
