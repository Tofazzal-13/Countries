import React, { useState } from 'react';
import "./Country.css"

const Country = ({country, handleVisitedCountry}) => {
   
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        if(visited){
            setVisited(false)
        } 
        else{
            setVisited(true)
        } 
        handleVisitedCountry(country) 
    }
    
    return (
        <div className={`card ${ visited && "visited_card"}`}>

            <img src={country.flags.flags.png} alt="" />
            <h4>Name : {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Area:{country.area.area} {country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>

        </div>
    );
};

export default Country;