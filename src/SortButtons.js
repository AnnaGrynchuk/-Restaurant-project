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
    ${'' /* border-radius: 20px; */}
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

const SortButtons = ({ handleSort }) => {
    const sort = (ev) => {
        const id = ev.target.id;
        handleSort({ id });
    }

    return (
        <>

            <Button onClick={sort} id="sortPriceUp" type="button">
                Сортировать по цене &#8657;
            </Button>
            <Button onClick={sort} id="sortPriceDown" type="button">
                Сортировать по цене &#8659;
            </Button>
        </>
    );
}
export default SortButtons
