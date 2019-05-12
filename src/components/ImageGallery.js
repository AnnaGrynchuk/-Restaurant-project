import React, { Component } from 'react';
import styled from 'styled-components';
import data from "../assets/media.json";
import Loader from "./Loader"

const Wrapper = styled.div`
background-image: linear-gradient(#2CC1DA, #F8E410);
`;

const Gallery = styled.div`
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-auto-rows: 200px;


`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align:center;
color: white
`
const Pagination = styled.div`
padding-top:25px;
padding-bottom: 25px;
display: flex;
justify-content: center;
`
const PageButton = styled.button`
color: black;
background-color:white;
font-size:16px;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid lightgray;
  :hover:not(.active) {background-color: #ddd;}
`
class ImageGallery extends Component {
    state = {
        images: [],
        imagesPerPage: 10,
        isLoading: true,
        currentPage: 1
    }
    componentDidMount() {
        this.setState({ images: data })
    }
    handleImageLoaded = () => {
        this.setState({ isLoading: false })
    }
    handleChangePage = (e) => {
        if (this.state.currentPage !== e.target.id) {
            this.setState({ currentPage: +e.target.id })
        }
    }
    handleDecPage = () => {
        if (this.state.currentPage > 1)
            this.setState((state) => ({
                currentPage: state.currentPage - 1
            }))
    }
    handleIncPage = () => {
        const pageNumbers = Math.ceil(this.state.images.length / this.state.imagesPerPage)
        if (this.state.currentPage < pageNumbers)
            this.setState((state) => ({
                currentPage: state.currentPage + 1
            }))
    }
    render() {
        const { images, imagesPerPage, isLoading, currentPage } = this.state;
        const lastItem = currentPage * imagesPerPage;
        const firstItem = lastItem - imagesPerPage;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(images.length / imagesPerPage); i++) {
            pageNumbers.push(i);
        }
        const visibleImages = images.slice(firstItem, lastItem)
        return (
            <Wrapper>
                <Container>
                    <h1>Images</h1>
                    {isLoading ? <Loader></Loader> : ""}
                </Container>
                <Gallery>
                    {visibleImages.map(img => <Image onLoad={this.handleImageLoaded} key={img.id} src={require(`../img/gallery/${img.url}`)}>
                    </Image>)}
                </Gallery>
                <Pagination>
                    <PageButton id="dec" onClick={this.handleDecPage} >&laquo;</PageButton>
                    {pageNumbers.map(num => <PageButton onClick={this.handleChangePage} id={num} key={num}>{num}</PageButton>)}
                    <PageButton id="inc" onClick={this.handleIncPage}>&raquo;</PageButton>
                </Pagination>
            </Wrapper>
        )
    }
}

export default ImageGallery;
