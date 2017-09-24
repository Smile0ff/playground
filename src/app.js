import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './characters';

import store from './store';

import Router from './router';

import './assets/css/normalize.scss';
import './assets/css/base.scss';

const app = document.querySelector('#app');

render(
    <Provider store={ store }>
        <Router />
    </Provider>,
    app
);