import React, { Component } from 'react';
import styled from 'styled-components';
import data from "./assets/music.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    background: linear-gradient(#870C9C, #FFC83D);
`;

const Image = styled.img`
    width:100%;
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
`;
const Text = styled.p`
    text-align: left;
    font-size: 20px;
    color: #ffffff;
    text-transform: uppercase;
    @media screen and (max-width:400px) {
    font-size: 10px;
    }
`;

class Music extends Component {
    state = {
        list: [],
    }
    componentDidMount() {
        this.setState({ list: data });
    }

    render() {

        const { list } = this.state;

        return (
            <Wrapper>
                <Image src={require(`./img/gallery/concerts.jpg`)} alt="background_picture" />
                <TextContainer>
                    {list.map(bands => (
                        <Text key={bands.id}>
                            {bands.date}&nbsp;<FontAwesomeIcon icon="guitar" color="black" />&nbsp; {bands.band}
                        </Text>))}
                </TextContainer>

            </Wrapper>
        )
    }
}

export default Music 
