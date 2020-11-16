import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import LoginForm from "./LoginForm";
import { action } from "@storybook/addon-actions";
import InputText from "./LoginForm/InputText";
import SignInButton from "./LoginForm/SignInButton";

export default {
    title: "LoginPage",
    decorators: [withKnobs]
};

export const loginForm: React.FC = () => (
    <LoginForm
        login={action("login")} />
);


export const inputText: React.FC = () => (
    <InputText
        handleChange={action('change')}
        value={text("value", "text")} />
);

export const signInButton: React.FC = () => (
    <SignInButton />
);
