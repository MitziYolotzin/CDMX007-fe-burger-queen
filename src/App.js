import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Breakfast from "./components/Breakfast";
import Burgers from "./components/Burgers";
import Complement from "./components/Complement";
import Drinks from "./components/Drinks";

import Navbar from "./components/Navbar";
import './css/Navbar.css';
import GlobalStore from './store/globalStore';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="App">
          {/* ComponentGlobalStore (Store)  will send the state to all the components*/}         
          <GlobalStore> 
            <Navbar title="Nav" />            
            <Switch>
              <Route path="/Breakfast" component={Breakfast} />
              <Route path="/Burgers" component={Burgers} />
              <Route path="/Drinks" component={Drinks} />
              <Route path="/Complement" component={Complement} />
            </Switch>
          </GlobalStore>
        </section>
      </BrowserRouter>
    );
  }

}

export default App;