import styled from 'styled-components';
import { TextProps } from '../Home/Body/types';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 30px 10px 30px;
    @media (max-width: 535px) {
        padding: 0px;
        width: 100%;
    }
`;

export const ContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const Content = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1em;
    row-gap: 1em;
    margin-top: 30px;
    @media (max-width: 1230px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 535px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Wrapper = styled.div`
    width: 220px;
`;

export const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.div<TextProps>`
    color: ${(props) => (props.color ? props.color : props.theme.color?.secondary)};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
    padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '')};
    padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom : '')};
    padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : '')};
`;
