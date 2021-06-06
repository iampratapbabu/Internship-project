import React from 'react'

const SingleCountry = ({country}) => {
    return (
        <div class="card">
        <img src={country.flag} class="card-img-top" alt="..."></img>
            <div class="card-header">
                {country.name}
            </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Capital-{country.capital}</li>
            <li class="list-group-item">Currency-{country.currencies[0].name}</li>
            <li class="list-group-item">Population-{country.population}</li>
        </ul>
</div>
    )
}

export default SingleCountry;
