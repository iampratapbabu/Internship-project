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

    let val=window.innerWidth
    


    return (
            <Fragment>
            <Search/>
            <hr/>
            <div style={val<400?countryStyleMobi:countryStyle}>
            {countries.map(country =>(
                <SingleCountry key={country.numericCode} country={country}/>
            ))}
            </div>

            </Fragment>
    )

   
};

const countryStyle={
    display:'grid',
    gridTemplateColumns:'repeat(4 ,1fr)',
    gridGap:'0.5rem'
};

const countryStyleMobi={
    display:'grid',
    gridTemplateColumns:'repeat(1 ,1fr)',
    gridGap:'0.5rem'
};


export default Countries
