import {React, useState, useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const People = () => {
    const starWarsState = useSelector(state => state);
    const [people, setPeople] = useState([])
    const [person, setPerson] = useState({});
    const dispatch = useDispatch();
    const [personId, setPersonId] = useState(1);

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
    
    return(
        <div>
            <div>
                {people.map(person => (
                    <Link key={extractId(person)} to={`${extractId(person)}`}>
                        <div>
                            <h5>{person.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
            {person && <div>
                <h3>{person.name}</h3>
                <button onClick={onNext}>next</button>
            </div>}
            <div><Outlet/></div>
        </div>
    )
}

export default People