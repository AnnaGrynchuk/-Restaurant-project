import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../assets/slider.json';

const SlideWrapper = styled.div`
    width: 100%; 
    background:#2CC1DA;
    margin:0 auto;
    position:relative;
`;
const Slide = styled.img`
	width: 100%;
    
`;
const ArrowLeft = styled.div`
    width: 20px;
    color: white;
	cursor: pointer;
	position: absolute;
	top: 50%;
    left: 1%;
`;
const ArrowRight = styled.div`
    width: 20px;
    color: white;
	cursor: pointer;
	position: absolute;
	top: 50%;
    right: 1%;
`;

class Slider extends Component {
    state = {
        images: [],
        imageIndex: 0,
    }
    componentDidMount() {
        this.setState({ images: data });
    }
    handlePreviousSlide = () => {
        const { images, imageIndex } = this.state;
        const lastIndex = images.length - 1;
        const letCarousel = imageIndex === 0;
        const index = letCarousel ? lastIndex : imageIndex - 1;
        this.setState({ imageIndex: index });
    }
    handleNextSlide = () => {
        const { images, imageIndex } = this.state;
        const lastIndex = images.length - 1;
        const letCarousel = imageIndex === lastIndex;
        const index = letCarousel ? 0 : imageIndex + 1;
        this.setState({ imageIndex: index });
    }
    render() {
        const { images, imageIndex } = this.state;
        return (
            <>
                {(images.length) &&
                    <SlideWrapper>
                        <Slide src={require(`../img/slider/${images[imageIndex].url}`)} />
                        <ArrowLeft onClick={this.handlePreviousSlide}> <FontAwesomeIcon icon="chevron-left" size="2x" /></ArrowLeft>
                        <ArrowRight onClick={this.handleNextSlide}> <FontAwesomeIcon icon="chevron-right" size="2x" /></ArrowRight>
                    </SlideWrapper>
                }
            </>
        )
    }
}



export default Slider
