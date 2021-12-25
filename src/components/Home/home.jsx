import {React, useState, useEffect} from "react";
require('./home.css');

const Home = () => {
    const [personID, setPersonID] = useState(1);
    const [person, setPerson] = useState({});

    useEffect(() => {
       fetch(`https://swapi.dev/api/people/${personID}`)
       .then(res => res.json())
       .then((data) => setPerson(data));
       inc();
    }, [personID])


    const inc = () => {
        setTimeout(() => {
            if (personID < 78){
                setPersonID(personID + 1);
            } else {
                setPersonID(1);
            }
        }, 3000)
    }


    return(
        <div className="home-block">
            <h1 className="title">Hello and welcome to Star-Wars-Pedia </h1>
            <div className="flex-between">
                <div className="description">
                    <h4>This is a resource containing Star-Wars heroes and planets data. Enjoy your time!)</h4>
                </div>
                <div>
                    <h3>Heroes:</h3>
                    <img className="home-image"  src={require(`../../../public/media/${personID}.jpeg`)} alt="" />
                    <h2>{person.name}</h2>
                    <p>Birth Year: {person.birth_year}</p>
                    <p>Gender: {person.gender}</p>
                </div>
            </div>
        </div>
    )
}

export default Home;


