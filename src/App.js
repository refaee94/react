import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {First} from './components/examples/first.jsx';
import {Counter} from './components/Counter/Counter';

class App extends Component {
  render() {
    return (
      <div> <Learncomponent></Learncomponent></div>
 
  
    );
  }
}

class Learncomponent extends Component{

  render() {
    return (
      <h1>hello world

<First>  </First>

<Counter></Counter>
      </h1>
  
    );
  }



}



export default App;