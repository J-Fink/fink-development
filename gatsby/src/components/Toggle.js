import React from 'react';
import styled from 'styled-components';
const ToggleStyles = styled.div`
width: 60px;
height: 34px;
.toggle {
    position: absolute;
    right: 10;
    display: inline-block;
    /* top: 25; */
    width: 60px;
    height: 34px;
}
.toggle input {
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
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;//change this color to match other blues
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`;
export default function Toggle () {
return (
    <ToggleStyles>
        <label className="toggle">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    </ToggleStyles>
)
}