import React, { useState, useEffect, useRef } from 'react';
import { SearchInput } from 'components/SearchInput';
import { Container, Title, WrapperRight, WrapperLeft, ButtonBack, TextBack, WrapperSearch, List } from './Styles';
import { HeaderProps } from './types';
import history from 'routerHistory';
import Api from 'utils/Api';
import { Card } from 'components/Card';
import { ObjectToQueryString, IsEmpty } from 'helpers';
import useWeather from 'hooks/useWeather';
import useOutsideClick from 'hooks/useOutsideClick';

const Header: React.FC<HeaderProps> = ({ withSearch, withBack }) => {
    const { onSetCity } = useWeather();

    const [search, setSearch] = useState('');
    const [isDidMount, setIsDidMount] = useState(false);
    const [listCicy, setListCity] = useState([]);

    const boxListRef = useRef(null);

    const onBack = () => {
        history.push({
            pathname: '/',
        });
    };

    useEffect(() => {
        setIsDidMount(true);
    }, []);

    useEffect(() => {
        if (!IsEmpty(search)) {
            const timeoutId = setTimeout(() => {
                isDidMount ? FindCity() : null;
            }, 1000);
            return () => clearTimeout(timeoutId);
        } else {
            setListCity([]);
        }
    }, [search]);

    useOutsideClick(boxListRef, () => {
        setListCity([]);
    });

    const FindCity = async () => {
        const obj = {
            q: search,
        };
        const queryString = ObjectToQueryString(obj);
        const result = await Api('GET', `find?${queryString}`);
        if (!IsEmpty(result.list)) {
            setListCity(result.list);
        }
    };

    const onSelect = (val: any) => {
        const Obj = {
            coord: val.coord,
            country: val.sys.country,
            id: val.id,
            name: val.name,
            population: 0,
            sunrise: 0,
            sunset: 0,
            timezone: 0,
        };
        onSetCity(Obj);
        setListCity([]);
    };

    return (
        <Container>
            <Title>5-day Forecast</Title>
            {withBack ? (
                <WrapperLeft onClick={onBack}>
                    <ButtonBack />
                    <TextBack>Back</TextBack>
                </WrapperLeft>
            ) : null}
            {withSearch ? (
                <WrapperRight>
                    <WrapperSearch ref={boxListRef}>
                        <SearchInput placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        {!IsEmpty(listCicy) ? (
                            <Card>
                                <Card.Body>
                                    {listCicy.map((val, idx) => {
                                        return (
                                            <List onClick={() => onSelect(val)} key={idx}>
                                                {val.name}
                                            </List>
                                        );
                                    })}
                                </Card.Body>
                            </Card>
                        ) : null}
                    </WrapperSearch>
                </WrapperRight>
            ) : null}
        </Container>
    );
};

export default Header;
