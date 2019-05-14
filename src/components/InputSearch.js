import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    box-sizing: border-box;
    width: 200px;
    display: block;
    text-align: center;
    line-height: 24px;
    padding: 15px 0;
    margin-bottom: 20px;
    color: #099389;
    text-transform: uppercase;
    background-color:#abfaf3;
    @media screen and (min-width:400px) and (max-width:500px) {
        padding: 10px;
        font-size:12px;
    }
    @media screen and (max-width:400px) {
        padding: 5px;
        font-size:12px;
    }
`;

const InputSearch = ({ handleSearch }) => {
    const onChange = (ev) => {
        const title = ev.target.value.toLowerCase();
        handleSearch({ title });
    }
    return (
        <SearchInput placeholder="Поиск по названию" type="search" onChange={onChange} />
    );
}

export default InputSearch
