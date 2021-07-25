import React, { useState } from 'react';
import { SearchInput } from 'components/SearchInput';
import { Container, Title, WrapperRight, WrapperLeft, ButtonBack, TextBack } from './Styles';
import { HeaderProps } from './types';
import history from 'routerHistory';

const Header: React.FC<HeaderProps> = ({ withSearch, withBack }) => {
    const [search, setSearch] = useState('');

    const onBack = () => {
        history.push({
            pathname: '/',
        });
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
                    <SearchInput placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </WrapperRight>
            ) : null}
        </Container>
    );
};

export default Header;
