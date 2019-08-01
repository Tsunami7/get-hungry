import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Main from './components/Main/Main'
import Header from './components/Header/'
import Footer from './components/Footer/'
import About from './components/About'

function App() {
  return (
    <div className="app-container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
      </Switch>

      <Footer/>
    </div>
  );
}  

export default App;
