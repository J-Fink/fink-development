import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './ThemeContext';
const ThemeSelectorStyles = styled.div`
width: 39px;
height: 34px;
position: absolute;
right: 20px;
transition: all 2.5s;
.theme-selector {
    position: absolute;
    /* right: 10; */
    display: inline-block;
    /* top: 25; */
    width: 40px;
    height: 5px;
}
.theme-selector input {
    opacity: 0;
    width: 0;
    height: 0;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}
.slider:before {
    position: absolute;
    content: "";
    height: 20px; /*20px;*/
    width: 20px;/*20px;*/
    left: 3px;
    bottom: -7px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}
input:checked + .slider {
  background-color: var(--attribute-name);//#2196F3;//change this color to match other blues
}
input:checked + .slider:before {
  background-color: var(--success-green);//#2196F3;//change this color to match other blues
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  
  transform: translateX(29px); //distance is the length of line
}
.slider.round {
  border-radius: 18px;
  top: 12px;
  left: -20px; //length of line determined by this and below
  right: 21px; //length of line determined by this and above
  bottom: -14px;
  transition: all 1s;
}

.slider.round:before {
  border-radius: 50%;
}
.slider.round:hover::before {
  background-color: purple;
}
`;
export default function ThemeSelector({ themeSelectorState, setThemeSelectorState }) {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  // if (!colorMode) {
  //   return null;
  // }
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.style.transform = `rotate(${rotateNumber}deg)`;
  });
  let rotateNumber = '0';
  const selectorOn = () => {
   rotateNumber = '-90';
  }
  const selectorOff = () => {
    rotateNumber = '0';
  }
  return (
    <ThemeSelectorStyles ref={myRef}>
        <label className="theme-selector">
            <input type="checkbox" checked={colorMode === 'dark'} onChange={ev => { setColorMode(ev.target.checked ? 'dark' : 'light');}} />
            <span className="slider round" onClick={() => setThemeSelectorState(!themeSelectorState)}>
      {themeSelectorState ? selectorOn() : selectorOff()}

            </span>
        </label>
    </ThemeSelectorStyles>
)
}