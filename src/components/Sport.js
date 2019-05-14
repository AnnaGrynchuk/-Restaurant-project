import React, { Component } from 'react';
import styled from 'styled-components';
import data from "../assets/sport.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    background-image: linear-gradient(#2CC1DA, #FEC73D);
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

class Sport extends Component {
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
                <Image src={require(`../img/gallery/sports.jpg`)} alt="background_picture" />
                <TextContainer>
                    {list.map(games => (
                        <Text key={games.id}>
                            {games.date} &nbsp;<FontAwesomeIcon icon="futbol" color="black" />&nbsp; {games.game}
                        </Text>))}
                </TextContainer>
            </Wrapper>
        )
    }
}

export default Sport
