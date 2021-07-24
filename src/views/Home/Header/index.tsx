import React, { useState } from 'react';
import { SearchInput } from 'components/SearchInput';
import { Container, Title, Wrapper } from './Styles';

const Header = () => {
    const [search, setSearch] = useState('');
    return (
        <Container>
            <Title>5-day Forecast</Title>
            <Wrapper>
                <SearchInput placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </Wrapper>
        </Container>
    );
};

export default Header;
