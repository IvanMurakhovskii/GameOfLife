import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './modules/LoginForm';
import { store } from '@/store';
import { PrivateRoute } from './utils';
import GameField from './components/GameField';


const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <PrivateRoute redirectPath="/login" path="/" component={GameField} />
                </Switch>
            </BrowserRouter>
        </Provider >
    );
};

export default App;