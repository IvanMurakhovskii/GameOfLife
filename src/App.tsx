import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '@/modules/Authentification/LoginPage';
import { store } from '@/store';
import { PrivateRoute } from './utils';
import Game from './modules/Game';
import { css, Global } from '@emotion/core';

const styles = css`
  html,
  body
  .root {
    margin: 0;
    padding: 0;
    height: 100%;
    weight: 100%;
    background-color: #f5f5f5;
    
  }
`;

const App: FC = () => {
    return (
        <div>
            <Global styles={styles} />
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute redirectPath="/login" path="/" component={Game} />
                    </Switch>
                </BrowserRouter>
            </Provider >
        </div>
    );
};

export default App;