import React from "react";
import { boolean, number, withKnobs } from "@storybook/addon-knobs";
import MaterialSlider from "./MaterialSlider/MaterialSlider";
import { action } from "@storybook/addon-actions";
import PatternSelect from "./PatternSelect/PatternSelect";
import GameSettings from "./GameSettings";

export default {
    title: "GameSettings",
    decorators: [withKnobs]
};

export const settings: React.FC = () => (
    <GameSettings
        isRunning={boolean("isRunning", true)}
        fillInBoardRandom={action("fillInBoardRandom")}
        updateGame={action("updateGame")}
        stopGame={action("stopGame")}
        startGame={action("startGame")}
        clear={action("clear")}
        setSpeed={action("setSpeed")}
        setPopulation={action("setPopulation")}
        insertPattern={action("insertPattern")} />
);

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


