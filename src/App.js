import React,{Fragment} from 'react';
import { Route,Switch } from "react-router-dom";

import './App.css';

//context files
import BlogsState from './context/blogs/BlogsState';
import AuthState from './context/auth/AuthState';

//components files
import About from './components/About';

//layout files
import Header from './layout/Header';
import Footer from './layout/Footer';


function App() {
  return (
    <AuthState>
    <BlogsState>

    <Fragment>
     
      <div className="container">
      <Header/>
        <h1>Hello React</h1>
        <Switch>
          <Route exact path='/about'component={About}/>
        </Switch>
      <Footer/>
      </div>
      
    </Fragment>
    
    </BlogsState>
    </AuthState>
    
  );
}

export default App;
