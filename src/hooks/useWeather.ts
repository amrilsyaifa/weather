import { useContext } from 'react';
import { WeatherContext } from 'contexts/WeatherContext';

const useWeather = () => {
    const { list, city, getData, onSetCity } = useContext(WeatherContext);
    return { list, city, getData, onSetCity };
};

export default useWeather;
