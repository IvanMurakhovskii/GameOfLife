import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Login from "./";
import { Provider } from "react-redux";
import { store } from "@/store";

export default {
    title: "LoginPage",
    decorators: [withKnobs]
};

export const loginForm: React.FC = () => (
    <Provider store={store}>
        <Login />
    </Provider>

);
