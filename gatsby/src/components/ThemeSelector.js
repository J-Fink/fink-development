import React from 'react';
import styled from 'styled-components';

const ThemeSelectorStyles = styled.div`
width: 120px;
height: 34px;
position: absolute;
right: 20px;
input:checked {
  transform: rotate(-90deg);
}
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
  transform: translateX(15px);
}
.slider.round {
  border-radius: 18px;
  top: 12px;
  left: 4px;
  right: 0px;
  bottom: -14px;
}

.slider.round:before {
  border-radius: 50%;
}
`;
export default function ThemeSelector({ themeSelectorState, setThemeSelectorState }) {
  const selectorOn = () => {
    console.log(`selector is on!`);
  }
  const selectorOff = () => {
    console.log(`selector is off!`);
  }
  return (
    <ThemeSelectorStyles>
        <label className="theme-selector">
            <input type="checkbox" />
            <span className="slider round" onClick={() => setThemeSelectorState(!themeSelectorState)}>
      {themeSelectorState ? selectorOn() : selectorOff()}

            </span>
        </label>
    </ThemeSelectorStyles>
)
}