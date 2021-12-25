import {React, useState, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
require('./planets.css')


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
        <div className="flex-between">
            <div>
                {planets.map(planet => (
                    <Link key={extractId(planet)} to={extractId(planet)}>
                        <div className="planet-links">
                            <h5 className="planet-link">{planet.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Planets;