import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Intent, 
        Spinner, 
        DatePickerFactory, 
        NumericInput} from "@blueprintjs/core";

import Flexbox from 'flexbox-react';
import autoBind from 'react-autobind';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

///=++++++++++++++++++++++++++

import TradeBox from './TradeBox.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {val: 0};
  }

  render() {
    return (
      <div className="App">
        <Flexbox flexDirection='row'>
          <TradeBox/>
          <TradeBox/>
          <TradeBox/>


        </Flexbox>


      </div>
    );
  }
}

export default App;
