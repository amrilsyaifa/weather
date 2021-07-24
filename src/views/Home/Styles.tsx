import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 30px 10px 30px;
    @media (max-width: 535px) {
        padding: 0px;
        width: 100%;
    }
`;
