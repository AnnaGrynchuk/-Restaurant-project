import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from './Map';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    width: 100%;
    background-image: linear-gradient(#2CC1DA, #F8E410);
    color: white;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column; 
    margin: 50px 0;
    padding-right: 30px;
    justify-content: flex-start;
    font-size: 18px;
    @media screen and (max-width:600px) {
        margin: 20px 0;
    }
`;

const Contacts = () => {
    return (
        <Wrapper>
            <Info>
                <p>Ресторан UNIVERSE</p>
                <p>ул.Русановская набережная, 7</p>
                <p><FontAwesomeIcon icon="clock" /> Мы открыты:</p>
                <p>ВС-ЧТ: 11:00-03:00 </p>
                <p>ПН-СБ: 11:00-04:00</p>
                <p><FontAwesomeIcon icon="phone" /> (044) 222-33-33</p>
            </Info>
            <Map />
        </Wrapper>
    )
}

export default Contacts
