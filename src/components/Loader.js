import React from "react";
import styled,{ keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Container = styled.div`
border: 16px solid transparent;
border-radius: 50%;
border-top: 16px solid white;
border-bottom: 16px solid white;
width: 100px;
height: 100px;
-webkit-animation: spin 2s linear infinite;
animation: ${rotate} 2s linear infinite;
`
const Loader = () =>{
    return(
        <Container>
</Container>
    )
}

export default Loader;