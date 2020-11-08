import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './modules/LoginForm';
import { store } from '@/store';
import { PrivateRoute } from './utils';


const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <PrivateRoute redirectPath="/login" path="/" component={TestComponent} />
                </Switch>
            </BrowserRouter>
        </Provider >
    );
};

const TestComponent: FC = () => {
    return (
        <h1>Test</h1>
    );
};

export default App;