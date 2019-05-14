import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: #0E8B87;
    color: white;
`;
const Info = styled.div`
    color: white;
    padding-left: 20px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Info>
                <p>Universe - твой формат отдыха!</p>
                <p>Copyright © Universe 2019</p>
            </Info>
        </FooterWrapper>
    )
}

export default Footer
