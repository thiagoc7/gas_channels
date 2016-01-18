import React from 'react';
import ReactDOM from 'react-dom';
window.React = React;
window.ReactDOM = ReactDOM;

import HelloWorld from './components/hello-world';
registerComponent('HelloWorld', HelloWorld);

import Home from './components/Home';
registerComponent('Home', Home);

