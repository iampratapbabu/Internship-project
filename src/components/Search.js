import React,{useState,useContext} from 'react';
import CountryContext from '../context/countries/CountryContext';


const Search = () => {

    const countriesContext  = useContext(CountryContext);
    const { searchCountry} = countriesContext;

    const [countryName,setCountryName]=useState('');

    const onChange= (e) =>{
        setCountryName(e.target.value);
        
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(countryName);
        searchCountry(countryName);
        setCountryName('');

    };

    return (
        <div>
            <form onSubmit={onSubmit}>
            <div className="form-group">
            <input type="text" className="form-control" name='countryName' value={countryName} onChange={onChange} placeholder="Search Country"/>
            <input type="submit" className="btn btn-dark mt-2"></input>
            </div>
            </form>
            
           
        </div>
    )
}

export default Search
