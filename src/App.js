import React,{Fragment} from 'react';
import { Route,Switch } from "react-router-dom";

import './App.css';

//context files
import CountryState from './context/countries/CountryState';

//components

import Countries from './components/Countries';


function App() {
  return (
    
    <CountryState>

    <Fragment>
     
      <div className="container">
     
        <h1>Opecise Research Private Limited</h1>
        <p>Developed By: Tej Pratap</p>
        <Countries/>
      </div>
      
    </Fragment>
    
    </CountryState>
    
    
  );
}

export default App;
