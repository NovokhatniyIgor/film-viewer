import * as React from 'react';
import { SearchContainerStyled, StyledSearch } from '../styles';

interface ISearchField {
    setSearchParam: (value: string) => void;
}

export const SearchField: React.FC<ISearchField> = ({ setSearchParam }) => {
    const handleSearch = (value: string) => {
        setSearchParam(value);
    };

    return (
        <SearchContainerStyled>
            <StyledSearch onSearch={handleSearch} placeholder="Search movie" size="large" />
        </SearchContainerStyled>
    );
};
