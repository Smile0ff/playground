import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';

import SW from './sw/components/sw';
import Characters from './characters'

import { DefaultLayout } from './layouts';

const Router = () => (
    <BrowserRouter>
        <DefaultLayout>
            <Switch>
                <Route exact path={ routes.index } component={ SW }/>
                <Route path={ routes.characters } component={ Characters }/>
            </Switch>
        </DefaultLayout>
    </BrowserRouter>
);

export default Router;