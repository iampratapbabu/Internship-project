import React,{useState} from 'react';

const Search = () => {

    const [countryName,setCountryName]=useState();

    const onChange= (e) =>{
        setCountryName(e.target.value);
        
    };

    const onSubmit = () =>{
        console.log(countryName);
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
