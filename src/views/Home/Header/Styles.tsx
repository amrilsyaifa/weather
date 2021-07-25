import styled from 'styled-components';
import { ArrowLeftRounded } from 'components/Icons';

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

export const WrapperRight = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

export const WrapperLeft = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;

export const ButtonBack = styled(ArrowLeftRounded)`
    font-size: 40px;
    color: #686868;
`;

export const TextBack = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
    color: #686868;
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
