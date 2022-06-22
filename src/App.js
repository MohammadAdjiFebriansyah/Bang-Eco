import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Heroo from './components/Heroo/Heroo';
import HomeAboutUs from './components/HomeAboutUs/HomeAboutUs';
import PageAboutUs from './components/PageAboutUs/PageAboutUs';
import { FooterContainer } from './containers/footer'

//import AvatarTeam from './assets/AvatarTeam';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Heroo />
          <HomeAboutUs />
        </Route>
        <Route path='/PageAboutUs'>
          <PageAboutUs />
        </Route>
      </Switch>
      <FooterContainer />
    </Router>
  )
}

export default App;