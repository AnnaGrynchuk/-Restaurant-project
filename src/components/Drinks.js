import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    width: 160px;
    height: 320px;
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px; 
    background-color: rgb(248, 238, 226);
    flex-wrap: wrap;
    @media screen and (max-width:400px) {
        width: 95px;
        height: 190px;
        padding: 10px 0;
        margin-right: 0;
        margin-bottom: 10px; 
        background-color: rgb(248, 238, 226);
        flex-wrap: wrap;
    }
`;
const Photo = styled.img`
    display:block;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width:400px) {
        width:80px;
    }
`;
const Name = styled.h3`
    text-align: center;
    font - size: 14px;
    color: #099389;
    text-transform: uppercase;
    border-bottom: 1px dashed  #03D8E3;
    @media screen and (max-width:400px) {
        font-size:12px;
    }
`;
const Text = styled.p`
    text-align: center;
    font-size: 12px;
    color: #4a5353;
    text-transform: uppercase;
    @media screen and (max-width:400px) {
        font-size:10px;
    }
`;
const Price = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #D68A01;
`;

const Drinks = (props) => {
    const { title, picture, info, price } = props;
    return (
        <Info >
            <Photo src={require(`../img/drinks/${picture}`)} alt="drink" />
            <Name>
                {title}
            </Name>
            <Text>
                {info}
            </Text>
            <Price>
                {price} грн
            </Price>
        </Info>
    );
}

export default Drinks
