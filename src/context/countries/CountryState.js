import React,{useReducer} from 'react';
import * as uuid from 'uuid';

import CountryContext from './CountryContext';
import CountryReducer from './CountryReducer';


import {
   GET_COUNTRY,
   SEARCH_COUNTRY
   } from '../types';
import axios from 'axios';


const CountryState = (props) =>{
    const initialState = {
        countries:[],
        loading:true
        
    };

    const [state,dispatch] = useReducer(CountryReducer,initialState);

    //     ADD_BLOG,

    //this is the demo function with parameter is blog and it is beign passed to reducer with payload
// const addBlog = (blog) =>{
//     blog.id = uuid.v4();
//     dispatch({type:ADD_BLOG,payload:blog});
//   };

 const getCountry = async() =>{
     const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
     console.log(res.data);
     dispatch({type:GET_COUNTRY,payload:res.data});
 };
  
  //  DELETE_BLOG,
  const searchCountry = async (countryName) =>{
    const res = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`);
     console.log(res.data);
     dispatch({type:SEARCH_COUNTRY,payload:res.data});
  };
  
  
   return(
       <CountryContext.Provider
       value={{
           countries:state.countries,
           loading:state.loading,
           getCountry,
           searchCountry
           }}>
           {props.children}
       </CountryContext.Provider>
    )

};

export default CountryState;

