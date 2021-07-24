import styled from 'styled-components';
import { CardComponentProps, WrapperProps } from './types';

export const Wrapper = styled.div<WrapperProps>`
    width: ${({ width }) => (width ? width : '100%')};
    position: relative;
    overflow: hidden;
    background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#FFFFFF')};
`;

export const CardComponent = styled.div<CardComponentProps>`
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '8')}px;
    border: 2px solid #f3f3f3;
    box-sizing: border-box;
    padding: ${(props) => (props.padding ? props.padding : '10')}px;
`;

export const TitleComponent = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #333333;
    margin-bottom: 12px;
`;

export const BodyComponent = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin-bottom: 12px;
`;
