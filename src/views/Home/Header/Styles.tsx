import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #eaedef;
    width: 100%;
    height: 300px;
    @media (max-width: 535px) {
        height: 200px;
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

export const Title = styled.div`
    font-size: 100px;
    @media (max-width: 850px) {
        font-size: 70px;
    }
    @media (max-width: 620px) {
        font-size: 50px;
    }
    @media (max-width: 535px) {
        font-size: 30px;
    }
`;
