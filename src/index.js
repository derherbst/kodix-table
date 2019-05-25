import 'core-js/es/map';
import 'core-js/es/set';

import React from 'react';
import ReactDOM from 'react-dom';

import './static/styles/index.scss';

import App from './components/page';

import CarsService from './services/cars-service';
import { CarsServiceProvider } from './components/cars-service-context';

ReactDOM.render(<App />, document.getElementById('root'));
