import React from 'react';
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import './Header.css';
import Home from "./Home";
import "./Home.css";
import reducer, { initialState } from './reducer';
import Checkout from './checkout';
import Login from './Login';
import { StateProvider } from './StateProvider';


 
function App() {
  const [count, setCount] = useState(0);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
          <Header />
          <Checkout />
          
          </Route>

          <Route path="/Login">
             <Login/ >
          </Route>

          {/*This is the default route,*/}

          <Route path="/">
          <Header />
          <Home/>
          </Route>

        </Switch>
     </div>
    </Router>
    </StateProvider>
    
  );
}

 {
  /*We need React-Router */
}

      {
        /*localhost.com*/
      }

      {
        /*localhost.com/checkout*/
      }

      {
        /*localhost.com/login*/
      }

export default App;
