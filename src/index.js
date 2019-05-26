import 'core-js/es/map';
import 'core-js/es/set';

import 'raf/polyfill';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './static/styles/index.scss'

import App from './components/page'

import CarsService from './services/cars-service'
import { CarsServiceProvider } from './components/cars-service-context'

import store from './store'

const carService = new CarsService();

ReactDOM.render(
    <Provider store={store}>
        <CarsServiceProvider value={carService}>
            <App />
        </CarsServiceProvider>
    </Provider>,
    document.getElementById('root')
);
