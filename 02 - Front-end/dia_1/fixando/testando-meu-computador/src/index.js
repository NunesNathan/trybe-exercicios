import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Description from './Component';

const textJSX = 'Hello, JSX'
let element = <h1>{textJSX}</h1>

function tick() {
  return (
    <>
    <span>Hello, world!</span>
    <span>It is {new Date().toLocaleTimeString()}.</span>
  </>
  );
}

ReactDOM.render(
  <div>
    {element}
    {tick()}
    {Description()}
  </div>,
  document.getElementById('root')
);


