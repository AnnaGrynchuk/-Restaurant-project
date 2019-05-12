import React, { Component } from 'react';
import Drinks from './Drinks';
import SortButtons from './SortButtons';
import FilterDrinksButtons from './FilterDrinksButtons';
import InputSearch from './InputSearch';
import data from "../assets/drinks.json";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    background-image: linear-gradient(#2CC1DA, #F8E410);
`;
const SideMenuList = styled.form`
    flex-grow:1;
    flex-basis: 20%;
    padding:20px;
    @media screen and (max-width:400px) {
    padding: 0 10px;
    }
`;
const DrinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
    flex-basis: 80%;
    @media screen and (min-width:400px) and (max-width:500px) {
    padding:20px 10px;
    }
`;
const Reset = styled.button`
    box-sizing: border-box;
    min-width: 200px;
    display: block;
    text-align: center;
    line-height: 24px;
    padding: 15px 0;
    margin-bottom: 20px;
    font-weight:bold;
    color:rgb(248, 238, 226);
    text-transform: uppercase;
    background-color:#1f635c;
    :hover {
    background-color:#3AAAA1; 
    }
`;
class MenuDrink extends Component {
  state = {
    list: [],
    title: '',
    id: '',
    category: '',
    result: [],
  }
  componentDidMount() {
    this.setState({ list: data });
  }
  handleSearchTitle = ({ title }) => {
    this.setState({ title })
  }
  handleSortDrinks = ({ id }) => {
    this.setState({ id });
  }
  handleFilterDrinks = ({ category }) => {
    this.setState({ category });
  }
  handleResetAll = () => {
    this.myFormRef.reset();
    this.setState({ title: '', id: '', category: '' });
  }
  getFormRef = (el) => {
    this.myFormRef = el;
  }
  render() {
    const { list, id, title, category } = this.state;
    let result = [...list];

    if (title) {
      result = list.filter(drinks =>
        drinks.title.includes(title));
    }
    if (category) {
      result = list.filter(drinks =>
        drinks.category === category);
    }

    if (id) {
      switch (id) {
        case 'sortPriceUp':
          result.sort((a, b) =>
            a.price - b.price);
          break;
        case 'sortPriceDown':
          result.sort((a, b) =>
            b.price - a.price);
          break;
      }
    }

    return (
      <Wrapper>
        <SideMenuList ref={this.getFormRef}>
          <InputSearch handleSearch={this.handleSearchTitle} />
          <SortButtons handleSort={this.handleSortDrinks} />
          <FilterDrinksButtons handleFilter={this.handleFilterDrinks} />
          <Reset onClick={this.handleResetAll} type="button"> Сбросить все фильтры</Reset>
        </SideMenuList>
        <DrinksContainer>
          {result.map(drinks => (
            <Drinks
              key={drinks.id}
              {...drinks}
              title={drinks.title.toUpperCase()}
              picture={drinks.url}
              category={drinks.category}
              info={drinks.info}
              price={drinks.price}
            />))}
        </DrinksContainer>
      </Wrapper>
    );
  }
}

export default MenuDrink
