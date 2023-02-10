import React from "react";

import "./MonsterList.css";

import airLogo from "../icons/air.svg";
import fireLogo from "../icons/fire.svg";
import earthLogo from "../icons/earth.svg";
import waterLogo from "../icons/water.svg";

import atkIcon from "../icons/attack.svg";
import defIcon from "../icons/defense.svg";
import trashIcon from "../icons/trash-can.svg";

function MonsterList(props) {
  return props.elem.map((monster) => (
    <div className="monster-wrapper" key={monster.id}>
      <div className="first-group">
        <div className="elem">
          {monster.element === 0 && <img alt="Air Logo" src={airLogo} />}
          {monster.element === 1 && <img alt="Fire Logo" src={fireLogo} />}
          {monster.element === 2 && <img alt="Air Logo" src={earthLogo} />}
          {monster.element === 3 && <img alt="Air Logo" src={waterLogo} />}
        </div>
        <div className="info-wrapper">
          <div className="monster-name">{monster.name}</div>
          <div className="attr-wrapper">
            <div className="monster-atk">
              <img alt="Attack" src={atkIcon}></img>
              <i className="attr-atk-value">{monster.atk}</i>
            </div>
            <div className="monster-def">
              <img alt="Defense" src={defIcon}></img>
              <i className="attr-def-value">{monster.def}</i>
            </div>
          </div>
        </div>
      </div>
      <div className="delete-monster">
        <img
          alt="Delete"
          src={trashIcon}
          // onClick={() => removeMonster(monster.id)}
        ></img>
      </div>
    </div>
  ));
}

export default MonsterList;
