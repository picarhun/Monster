import logo from "./logo.svg";

import React, { useState } from "react";

import "./App.css";
import CreateMonster from "./components/CreateMonster";
import MonsterList from "./components/MonsterList";

let array = [
  // { id: 0,
  //   element: 0,
  //   name: "Valami",
  //   atk: 1,
  //   def: 1}
];

function App() {
  const [monsters, setMonsters] = useState(array);

  function addMonstersHandler(data) {
    setMonsters((prevArray) => {
      return [...prevArray, data];
    });
  }

  return (
    <div className="main-page">
      <img src={logo} className="logo-main" alt="Logo"></img>
      <p className="title">Monsters</p>
      <CreateMonster onAddMonsters={(data) => addMonstersHandler(data)} />
      <MonsterList elem={monsters} />
    </div>
  );
}

export default App;
