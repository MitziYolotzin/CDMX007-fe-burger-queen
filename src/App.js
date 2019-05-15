import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Burgers from "./components/Burgers";
import Complement from "./components/Complement";
import Drinks from "./components/Drinks";
//import Login from "./components/Login";
//import Error from "./components/Error";
import  Navbar from "./components/Navbar";
import './css/Navbar.css';


// p1 Prueba Ruta1
/*const newRoute = () => {
  return (
<section>
  <p>New Route</p>
</section>
  );
} */

class App extends Component {
render (){
  return(
    <BrowserRouter>
<section className="App">
<Navbar title="Nav" />
    {/* <Route path="/new" component={newRoute} /> */}
<Switch>
    {/* <Route path="/" component={Home} exact /> */}
    {/* <Route path="/Login" component={Login} /> */}
    <Route path="/Breakfast" component={Breakfast} />
    <Route path="/Burgers" component={Burgers} />
    <Route path="/Drinks" component={Drinks} />
    <Route path="/Complement" component={Complement} />
    {/* <Route component={Error} /> */}
    {/*<Route path="/SectionTree" render={() => <SectionTree />}/>*/}
</Switch>
    </section>
    </BrowserRouter>
  );
}

}

export default App;