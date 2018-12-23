import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import '@babel/polyfill';
import App from './app';

const HotApp = hot(module)(App);

render(<HotApp />, document.getElementById('root'));
