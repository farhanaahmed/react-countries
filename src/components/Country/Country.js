import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,flag,region} = props.country;
    return (
        <div className='country'>
            <p><img className='img-flag' src={flag} alt='flag'/></p>
            <h2>Name: {name}</h2>
            <h3>Capital: {capital}</h3>
            <h3>Region: {region}</h3>

        </div>
    );
};

export default Country;