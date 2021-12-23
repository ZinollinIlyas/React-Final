import {React, useState, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://swapi.dev/api/planets')
        .then(res => res.json())
        .then(data => setPlanets(data.results))
    }, [planets])

    console.log(planets);

    const extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
      };



    return(
        <div>
            {planets.map(planet => (
                <Link key={extractId(planet)} to={extractId(planet)}>
                    <h3>{planet.name}</h3>
                </Link>
            ))}
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Planets;