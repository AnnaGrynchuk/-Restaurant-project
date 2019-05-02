import React, { Component } from 'react';
import styled from 'styled-components';


const Button = styled.button`
    box-sizing: border-box;
    min-width: 200px;
    display: block;
    text-align: center;
    line-height: 24px;
    padding: 15px 0;
    margin-bottom: 20px;
    font-size: 14px;
    color: #7DF1E8;
    text-transform: uppercase;
    background-color:#099389;
    white-space: pre-wrap;
    :hover {
    background-color:#3AAAA1; 
    };
    @media screen and (min-width:400px) and (max-width:500px) {
    padding: 10px;
    font-size:12px;
    }
    @media screen and (max-width:400px) {
    padding: 5px;
    font-size:12px;
    }
`;

const FilterButtons = ({ handleFilter }) => {

    const filter = (ev) => {
        const category = ev.target.id;
        handleFilter({ category });
    }
    return (
        <>
            <Button onClick={filter} id="alcohol" type="button">
                Алкоголь
            </Button>
            <Button onClick={filter} id="drink" type="button">
                Напитки
            </Button>
        </>
    );
}
export default FilterButtons
