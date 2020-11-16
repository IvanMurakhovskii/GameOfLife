import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Grid } from "@material-ui/core";
import Header from "./";
import { Provider } from "react-redux";
import { store } from "@/store";


export default {
    title: "UserInfo",
    decorators: [withKnobs],
};

export const userInfo: React.FC = () => (
    <Provider store={store}>
        <Grid zeroMinWidth>
            <Header />
        </Grid>
    </Provider>


);