import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home"
import Nav from "./components/Nav/nav";
import People from "./components/People/people";
import Person from "./components/Person/person";
import Planets from "./components/Planets/planets";
import Planet from "./components/Planet/planet";

function App() {
  return (
    <main>
      <Nav/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People/>}>
          <Route path=":personId" element={<Person/>} />
        </Route>
        <Route path="/planets" element={<Planets/>}>
          <Route path=":planetId" element={<Planet/>}/>
        </Route>
      </Routes>
    </div>
    </main>
  );
}

export default App;
