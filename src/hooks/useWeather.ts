import { useContext } from 'react';
import { WeatherContext } from 'contexts/WeatherContext';

const useWeather = () => {
    const { list, city, getData } = useContext(WeatherContext);
    return { list, city, getData };
};

export default useWeather;
