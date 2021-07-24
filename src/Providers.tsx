import React from 'react';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { WeatherContextProvider } from 'contexts/WeatherContext';
type Props = {
    children: JSX.Element;
};

const Providers: React.FC<Props> = ({ children }: Props) => {
    return (
        <ThemeContextProvider>
            <WeatherContextProvider>{children}</WeatherContextProvider>
        </ThemeContextProvider>
    );
};

export default Providers;
