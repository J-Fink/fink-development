import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './ThemeContext';
const ThemeSelectorStyles = styled.div`
width: 40px;
height: 40px;
position: absolute;
right: 5px;
bottom: -6px;
transition: all 1s;
transition: transform 0.5s;
transform: rotate(var(--themeSelectorRotate));
.theme-selector {
    position: absolute;
    /* right: 10; */
    display: inline-block;
    /* top: 25; */
    width: 1px;
    height: 1px;
}
.theme-selector input {
    opacity: 0;
    width: 0;
    height: 0;
}
.round {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    /* -webkit-transition: .4s; */
    /* transition: .4s; */
}
.round {
    position: absolute;
    content: "";
    height: 20px; /*20px;*/
    width: 20px;/*20px;*/
    left: 3px;
    bottom: -7px;
    background-color: var(--sliderBeforeColor);
    box-shadow: var(--sliderBeforeBoxShadow);
    /* -webkit-transition: .4s; */
    /* transition: .4s; */
}
/* input:checked + .slider {
  background-color: transparent;//#2196F3;//change this color to match other blues
} */
input:checked + .round {
  background-color: var(--sliderBeforeColor);//#2196F3;//change this color to match other blues
}
input:checked + .round:hover {
  background-color: var(--sliderBeforeColorHover);//#2196F3;//change this color to match other blues
}

/* input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
} */

.round {
  -webkit-transform: translateX(5px);
  -ms-transform: translateX(5px);
  transform: translateX(5px); //distance is the length of line
}

.round {
  border-radius: 50%;
}
.round:hover {
  background-color: var(--sliderBeforeColorHover);
}

//this checks if hover is available (not available on mobile) if it is not then it won't change the color. There was an issue where you would click and the hover state would stay until you clicked somewhere else
@media (hover: none) {
.round:hover {
  background-color: var(--sliderBeforeColor);
}
input:checked + .round:hover {
  background-color: var(--sliderBeforeColor);//#2196F3;//change this color to match other blues
}

}
`;
export default function ThemeSelector({ themeSelectorState, setThemeSelectorState }) {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  if (!colorMode) {
    return null;
  }
  // const myRef = useRef(null);
  // useEffect(() => {
  //   myRef.current.style.transform = `rotate(${rotateNumber}deg)`;
  // });
  // let rotateNumber = '0';
  // const selectorOn = () => {
  //  rotateNumber = '-90';
  // }
  // const selectorOff = () => {
  //   rotateNumber = '0';
  // }
  return (
    <ThemeSelectorStyles /*ref={myRef}*/>
        <label className="theme-selector">
            <input type="checkbox" checked={colorMode === 'dark'} onChange={ev => { setColorMode(ev.target.checked ? 'dark' : 'light');}} />
            <span className="round" onClick={() => setThemeSelectorState(!themeSelectorState)}>
      {/* {themeSelectorState ? selectorOn() : selectorOff()} */}
            </span>
        </label>
    </ThemeSelectorStyles>
)
}