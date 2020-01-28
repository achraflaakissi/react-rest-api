import React from 'react';
import HomePage from './components/home/home';
import DetailPage from './components/detail/detail';
import NavPage from './components/nav-bar/nav-bar';
import { Switch, Route } from "react-router-dom";
import './App.css';


function App() {
  return ( 
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
      <NavPage/>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/detail/:id" component={DetailPage} />
      </Switch>
    </div>
    
  );
}

export default App;