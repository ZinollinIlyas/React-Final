import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
require('./planet.css');


const Planet = () => {
    const {planetId} = useParams();
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${planetId}`)
        .then(res => res.json())
        .then(data => setPlanet(data));

    }, [planetId])

    return(
        <div className="planet-block">
            <img className="home-image" src={require(`../../../public/planets/${planetId}.jpeg`)} alt="" />
            <h3>{planet.name}</h3>
            <p>Rotation Period: {planet.rotation_period}</p>
            <p>Orbital Period: {planet.orbital_period}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planet;