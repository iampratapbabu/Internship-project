import React,{Fragment,useContext,useEffect,useState} from 'react';
import CountryContext from '../context/countries/CountryContext';
import SingleCountry from './SingleCountry';
import Search from "./Search";

const Countries = () => {

    const countriesContext  = useContext(CountryContext);
    const { loading,countries,getCountry} = countriesContext;

   
    
    useEffect(()=>{
        
        getCountry();
       
        //eslint-disable-next-line
    },[]);

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    };


    return (
            <Fragment>
            <Search/>
            
            {countries[0].map(country =>(
                <SingleCountry key={country.numericCode} country={country}/>
            ))}
            

            </Fragment>
    )
}

export default Countries
