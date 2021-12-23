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
                console.log(person)
            } else {
                setPersonID(1);
            }
        }, 3000)
    }



    const fade = (element) => {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }

    return(
        <div className="home-block">
            <h1>Hello and welcome to Star-Wars-Pedia </h1>
            <h3>Different persons:</h3>
            <img className="home-image"  src={require(`../../../public/media/${personID}.jpeg`)} alt="" />
            <h2>{person.name}</h2>
            <p>{person.birth_year}</p>
            <p>{person.gender}</p>
        </div>
    )
}

export default Home;


