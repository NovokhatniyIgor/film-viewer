import * as React from 'react';
import { Input } from 'antd';
import { SearchContainerStyled } from '../styles';

interface ISearchField {
    setSearchParam: (value: string) => void;
}

export const SearchField: React.FC<ISearchField> = ({ setSearchParam }) => {
    const handleSearch = (value: string) => {
        setSearchParam(value);
    };

    return (
        <SearchContainerStyled>
            <Input.Search onSearch={handleSearch} placeholder="Search movie" />
        </SearchContainerStyled>
    );
};
