import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpecialsWrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    background: linear-gradient(#2CC1DA, #F8E410);
`;
const HappyHours = styled.div`
    display:flex;
    flex-direction:column; 
    align-items: center;
    width: 300px;
    padding: 40px 0;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    @media screen and (max-width:400px) {
        font-size:20px;
        padding: 20px 0;
    }
`;
const Icon = styled(FontAwesomeIcon)`
    font-size: 120px;
    @media screen and (max-width:400px) {
        font-size:60px;
    }
`;

const SpecialProposes = () => {
    return (
        <SpecialsWrapper>
            <HappyHours>
                <p>Счастливые часы с 12:00 до 18:00</p>
                <Icon icon="clock" />
            </HappyHours>
            <HappyHours>
                <p>Скидка 35% на День рождения</p>
                <Icon icon="birthday-cake" />
            </HappyHours>
            <HappyHours>
                <p>Бесплатная доставка круглосуточно</p>
                <Icon icon="truck" />
            </HappyHours>
        </SpecialsWrapper>
    )
}

export default SpecialProposes
