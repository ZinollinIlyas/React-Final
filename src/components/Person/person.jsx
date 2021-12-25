import {React, useState, useEffect} from "react";
import { useParams } from "react-router";
require('./person.css');

const Person = () => {
    const {personId} = useParams()
    const [person, setPerson] = useState({});
    const [planetId, setPlanetId] = useState(1)
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${personId}`)
        .then(res => res.json())
        .then((data)=> {
            setPerson(data)
            const idRegExp = /\/([0-9]*)\/$/;
            const planetId = data.homeworld.match(idRegExp)[1];
            setPlanetId(planetId);
        });


        
        fetch(`https://swapi.dev/api/planets/${planetId}`)
        .then(res => res.json())
        .then(data => setPlanet(data));
    }, [person])





    return(
        <div className="person-block">
            <img className="home-image" src={require(`../../../public/media/${personId}.jpeg`)} alt="" />
            <h1>{person.name}</h1>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Gender: {person.gender}</p>
            <p>Planet: {planet.name}</p>

        </div>
    )
}

export default Person;