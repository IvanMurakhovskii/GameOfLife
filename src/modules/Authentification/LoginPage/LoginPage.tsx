import React, { FC } from 'react'
import { connect } from 'react-redux';
import { actions } from '@/modules/Authentification/slice';
import LoginForm from './LoginForm';

const mapDispatchToProps = {
    login: actions.login
}

export type Props = typeof mapDispatchToProps;

const LoginPage: FC<Props> = (props) => {
    return (
        <LoginForm login={props.login} />
    );
}

export const Login = connect(null, mapDispatchToProps)(LoginPage);