import {React, useState, useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
require('./people.css');

const People = () => {
    const starWarsState = useSelector(state => state);
    const [people, setPeople] = useState([])
    const [person, setPerson] = useState({});
    const dispatch = useDispatch();
    const [personId, setPersonId] = useState(starWarsState);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(data => setPeople(data.results))

        fetch(`https://swapi.dev/api/people/${personId}`)
        .then(res => res.json())
        .then(data => setPerson(data));
    }, [people, personId])

    const extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
      };

    const onNext = () => {
        dispatch({
            type: 'INC',
        })
        setPersonId(starWarsState);
        console.log(personId);
    }

    const onPrev = () => {
        dispatch({
            type: 'DEC',
        })
        setPersonId(starWarsState);
        console.log(personId);

    }

    
    return(
        <div className="flex-between">
            <div>
                {people.map(person => (
                    <Link key={extractId(person)} to={`${extractId(person)}`}>
                        <div className="hero-links">
                            <h5>{person.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
            <div><Outlet/></div>
            <p className="search">
            <Link to={`${personId}`}>
                <div>
                    <img className="home-image" src={require(`../../../public/media/${personId}.jpeg`)} alt="" />
                    <h3>{person.name}</h3>
                    <p className="redirect-descr">Click here to see heroes that are not in list</p>

                </div>
            </Link>
                
                <p>
                <button onClick={onPrev}>prev</button>
                <button onClick={onNext}>next</button>
                </p>
            </p>
            
        </div>
    )
}

export default People