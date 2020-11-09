import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Cell from ".";


export default {
    title: "Cell",
    decorators: [withKnobs],
};

export const cell: React.FC = () => (
    <Cell
        alive={boolean('alive', false)}
        handleClick={action("click")}
    />
);