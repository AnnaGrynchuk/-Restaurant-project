import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpecialsWrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    ${'' /* background: linear-gradient(#870C9C, #FFC83D); */}
    ${'' /* background: linear-gradient(#7C14B7,#28F3E3); */}
    background: linear-gradient(#2CC1DA, #F8E410);
`;

const HappyHours = styled.div`
    width: 30%;
    padding: 40px 0;
    
    ${'' /* background:linear-gradient(#9FB9FB, #FE85CE); */}
    ${'' /* background: linear-gradient(#870C9C, #FFC83D); */}
    
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`;

const SpecialProposes = () => {
    return (
        <SpecialsWrapper>
            <HappyHours>
                <p>Счастливые часы ежедневно с 12:00 до 18:00</p>
                <FontAwesomeIcon icon="clock" size="6x" />
            </HappyHours>
            <HappyHours>
                <p>Скидка 35% на День рождения</p>
                <FontAwesomeIcon icon="birthday-cake" size="6x" />
            </HappyHours>
            <HappyHours>
                <p>Бесплатная доставка круглосуточно</p>
                <FontAwesomeIcon icon="truck" size="6x" />
            </HappyHours>
        </SpecialsWrapper>
    )
}

export default SpecialProposes
