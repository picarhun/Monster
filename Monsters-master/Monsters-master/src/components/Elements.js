import React, { useState } from "react";
import "./Elements.css";

//icons
import airLogo from "../icons/air.svg";
import fireLogo from "../icons/fire.svg";
import earthLogo from "../icons/earth.svg";
import waterLogo from "../icons/water.svg";
import leftArrow from "../icons/arrow-left.svg";
import rightArrow from "../icons/arrow-right.svg";

let iconsID = 0;

function Elements({ onAddElem }) {
  const [elementRoot, setElementRoot] = useState(airLogo);

  function changeElementPrew() {
    if (iconsID === 0) {
      iconsID = 3;
    } else {
      iconsID -= 1;
    }
    iconsSrc(iconsID);
    onAddElem(iconsID);
  }
  function changeElementNext() {
    if (iconsID === 3) {
      iconsID = 0;
    } else {
      iconsID += 1;
    }
    iconsSrc(iconsID);
    onAddElem(iconsID);
  }

  const iconsSrc = (iconsID) => {
    switch (iconsID) {
      case 0:
        // console.log("Air");
        setElementRoot(airLogo);
        break;
      case 1:
        // console.log("Fire");
        setElementRoot(fireLogo);
        break;
      case 2:
        // console.log("Earth");
        setElementRoot(earthLogo);
        break;
      case 3:
        // console.log("Water");
        setElementRoot(waterLogo);
        break;
      default:
        setElementRoot(airLogo);
        break;
    }
  };

  return (
    <div className="elem_select">
      <img
        alt="Previous element"
        className="select_arrow left"
        onClick={changeElementPrew}
        src={leftArrow}
      ></img>
      <div className="elemInfo">
        <img alt="Element" className="elem" src={elementRoot}></img>
      </div>
      <img
        alt="Next element"
        className="select_arrow right"
        onClick={changeElementNext}
        src={rightArrow}
      ></img>
    </div>
  );
}

export default Elements;
