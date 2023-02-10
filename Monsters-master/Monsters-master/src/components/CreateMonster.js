import React, { useState } from "react";

import "./CreateMonster.css";
import Elements from "./Elements";

import atkIcon from "../icons/attack.svg";
import defIcon from "../icons/defense.svg";

let datasID = 0;

function CreateMonster({ onAddMonsters }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAtk, setEnteredAtk] = useState(1);
  const [enteredDef, setEnteredDef] = useState(1);
  const [enteredElemID, setEnteredElem] = useState(0);

  const addMonster = () => {
    let datas = {};

    let id = +datasID;
    let element = +enteredElemID;
    let name = enteredName;
    let atk = +enteredAtk;
    let def = +enteredDef;

    if (name.length === 0 || atk.length === 0 || def.length === 0) {
      if (name.length === 0) {
        alert("You must provide a name!");
      }
      if (atk.length === 0) {
        alert("You must provide an attack value!");
      }
      if (def.length === 0) {
        alert("You must provide a defense value!");
      }
    } else {
      datas = { id, element, name, atk, def };
      if (datasID === 0) {
        datas.id = 0;
      } else {
        datas.id = datasID;
      }
      datasID++;
    }

    // console.log(datas);
    onAddMonsters(datas);

    setEnteredName("");
    setEnteredAtk(1);
    setEnteredDef(1);
  };

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function atkChangeHandler(event) {
    setEnteredAtk(event.target.value);
  }

  function defChangeHandler(event) {
    setEnteredDef(event.target.value);
  }

  function addElementHandler(data) {
    setEnteredElem(data);
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div className="createMonster-main" onSubmit={submitHandler}>
      <p className="create-title">Create Monster</p>
      <div className="newMonster-wrapper">
        <Elements onAddElem={(data) => addElementHandler(data)} />
        <input
          type="text"
          placeholder="Monster name..."
          value={enteredName}
          className="newmonster-name"
          id="new_name_input"
          onChange={nameChangeHandler}
        />
        <div className="atk-def-select">
          <div className="atk-wrapper">
            <img className="icon" alt="Attack" src={atkIcon}></img>
            <input
              type="number"
              value={enteredAtk}
              min={1}
              max={20}
              onChange={atkChangeHandler}
            />
          </div>
          <div className="def-wrapper">
            <img className="icon" alt="Defense" src={defIcon}></img>
            <input
              type="number"
              value={enteredDef}
              min={1}
              max={20}
              onChange={defChangeHandler}
            />
          </div>
        </div>
        <button onClick={addMonster}>Create</button>
      </div>
    </div>
  );
}

export default CreateMonster;
