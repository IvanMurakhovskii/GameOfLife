import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './modules/LoginForm';
import { store } from '@/store';
import { PrivateRoute } from './utils';
import Game from './modules/Game';
import { css, Global } from '@emotion/core';

const styles = css`
  html,
  body {
    margin: 0;
    display: flex;
    padding: 0;
    min-height: 100vh;
    max-width: 100vw;
    background-color: #f5f5f5;
    .noScroll {
        overflow: hidden;
    }
  }
`;

const App: FC = () => {
    return (
        <div>
            <Global styles={styles} />
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={LoginForm} />
                        <PrivateRoute redirectPath="/login" path="/" component={Game} />
                    </Switch>
                </BrowserRouter>
            </Provider >
        </div>
    );
};

export default App;