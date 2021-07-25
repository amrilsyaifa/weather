import React, { useState } from 'react';
import Api from 'utils/Api';
import { DEFAULT_CITY } from './types';
import { ObjectToQueryString } from 'helpers';

export const LIST_KEY = 'list';
// const CITY_KEY = 'city';

const WeatherContext = React.createContext({
    list: [],
    city: DEFAULT_CITY,
    getData: () => null,
    onSetCity: (e: any) => e,
});

type Props = {
    children: JSX.Element;
};

const WeatherContextProvider = ({ children }: Props) => {
    const [city, setCity] = useState(DEFAULT_CITY);
    const [list, setList] = useState([]);

    const getData = async () => {
        const obj = {
            q: city.name,
        };
        const queryString = ObjectToQueryString(obj);
        const result = await Api('GET', `forecast?${queryString}&units=metric`);
        if (result) {
            // this gives an object with dates as keys
            const groups = result.list.reduce((groups, val) => {
                const date = val.dt_txt.split(' ')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(val);
                return groups;
            }, {});

            const groupArrays = Object.keys(groups).map((date) => {
                return {
                    date,
                    data: groups[date],
                    date_text: groups[date][0].dt_txt,
                    weather: groups[date][0].weather,
                    main: groups[date][0].main,
                };
            });
            setList(groupArrays);
            localStorage.setItem(LIST_KEY, JSON.stringify(groupArrays));
            setCity(result.city);
        }
    };

    const getDataParams = async (val: any) => {
        const obj = {
            q: val.name,
        };
        const queryString = ObjectToQueryString(obj);
        const result = await Api('GET', `forecast?${queryString}&units=metric`);
        if (result) {
            // this gives an object with dates as keys
            const groups = result.list.reduce((groups, val) => {
                const date = val.dt_txt.split(' ')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(val);
                return groups;
            }, {});

            const groupArrays = Object.keys(groups).map((date) => {
                return {
                    date,
                    data: groups[date],
                    date_text: groups[date][0].dt_txt,
                    weather: groups[date][0].weather,
                    main: groups[date][0].main,
                };
            });
            setList(groupArrays);
            localStorage.setItem(LIST_KEY, JSON.stringify(groupArrays));
            setCity(result.city);
        }
    };

    const onSetCity = (val: any) => {
        setCity(val);
        getDataParams(val);
    };

    return <WeatherContext.Provider value={{ list, city, getData, onSetCity }}>{children}</WeatherContext.Provider>;
};

export { WeatherContext, WeatherContextProvider };
