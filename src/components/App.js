import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Main from './Main'
import ImageGallery from './ImageGallery';
import MenuDrink from './MenuDrink';
import MenuMeal from './MenuMeal';
import Music from './Music';
import Sport from './Sport';
import TableReservation from './TableReservation';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight, faClock, faBirthdayCake, faTruck, faCalendarAlt, faFutbol, faGuitar } from '@fortawesome/free-solid-svg-icons';



library.add(faChevronLeft, faChevronRight, faClock, faBirthdayCake, faTruck, faCalendarAlt, faFutbol, faGuitar);



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
class App extends Component {



  render() {
    return (
      <Router>
        <Wrapper>

          <Header />
          <Route exact path="/" component={Main}></Route>
          <Route path="/media" component={ImageGallery}></Route>
          <Route path="/drinks" component={MenuDrink}></Route>
          <Route path="/meal" component={MenuMeal}></Route>
          <Route path="/music" component={Music}></Route>
          <Route path="/sport" component={Sport}></Route>
          <Route path="/reservation" component={TableReservation}></Route>
          <Footer />

        </Wrapper>
      </Router>

    );
  }

}

export default App;
