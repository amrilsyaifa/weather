import React from 'react';
import { SearchInputProps } from './types';
import { IsEmpty } from 'helpers';
import {
    Container,
    IconInfo,
    IconSearch,
    WrapperSearchInput,
    ContainerSearchInputFooter,
    SearchInputError,
    Label,
    Input,
} from './Styles';

const SearchInput: React.FC<SearchInputProps> = ({
    label,
    error,
    position = 'left',
    width,
    ...props
}: SearchInputProps) => {
    return (
        <Container style={{ width: !IsEmpty(width) ? width : null }}>
            {!IsEmpty(label) ? <Label error={!IsEmpty(error)}>{label}</Label> : null}
            <WrapperSearchInput>
                <IconSearch color={!IsEmpty(error) ? '#eb5757' : '#333333'} position={position} />
                <Input position={position} error={!IsEmpty(error)} {...props} />
            </WrapperSearchInput>
            {!IsEmpty(error) ? (
                <ContainerSearchInputFooter>
                    <IconInfo />
                    <SearchInputError>{error}</SearchInputError>
                </ContainerSearchInputFooter>
            ) : null}
        </Container>
    );
};

export default SearchInput;
