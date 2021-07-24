import styled from 'styled-components';
import { SearchOutline, InfoCircle } from '../Icons';
import { LabelProps, IconSearchProps, InputProps } from './types';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const IconInfo = styled(InfoCircle)`
    font-size: 25px;
    margin-right: 12px;
    color: #eb5757;
`;

export const IconSearch = styled(SearchOutline)<IconSearchProps>`
    position: absolute;
    left: ${(props) => (props.position === 'left' ? '15px' : '')};
    right: ${(props) => (props.position === 'right' ? '15px' : '')};
    top: 9px;
    font-size: 30px;
    color: ${(props) => props.color};
`;

export const WrapperSearchInput = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const ContainerSearchInputFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    width: 100%;
    bottom: -30px;
`;

export const SearchInputError = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 160%;
    color: #eb5757;
`;
export const Label = styled.label<LabelProps>`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    display: block; /* add this */
    margin-bottom: 12px;
    color: ${(props) => (props.error ? '#eb5757' : '#333333')};
`;

export const Input = styled.input<InputProps>`
    height: 48px;
    background: #ffffff;
    border-radius: 8px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 160%;
    color: ${(props) => (props.error ? '#eb5757' : '#333333')};
    border: ${(props) => (props.error ? '1px solid #eb5757' : '1px solid rgba(229, 229, 229, 0.5)')};
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(242, 242, 242, 0.05);
    padding: ${(props) =>
        props.position === 'left' ? '11px 11px 11px 55px' : props.position === 'right' ? '11px 55px 11px 11px' : ''};
    &:focus {
        outline: none;
        border: 1px solid rgba(156, 156, 156, 0.5);
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(242, 242, 242, 0.05);
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${(props) => (props.error ? '#eb5757' : '#333333')};
        opacity: 1;
    }
    :-ms-input-placeholder {
        color: ${(props) => (props.error ? '#eb5757' : '#333333')};
        opacity: 1;
    }
`;
