import React from "react";
import { number, withKnobs } from "@storybook/addon-knobs";
import MaterialSlider from "./Slider/MaterialSlider";
import { action } from "@storybook/addon-actions";
import PatternSelect from "./Select/PatternSelect";

export default {
    title: "GameSettings",
    decorators: [withKnobs]
};

export const slider: React.FC = () => (
    <MaterialSlider
        min={number('min', 0)}
        max={number('max', 100)}
        label="slider"
        onChangeCommitted={action("onChangeCommitted")}
    />
);

export const select: React.FC = () => (
    <PatternSelect
        onChange={action("onChange")}
    />
);


