import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import AccountField from "./AccountField";
import LogoutButton from "./LogoutButton";
import { action } from "@storybook/addon-actions";


export default {
    title: "UserInfo",
    decorators: [withKnobs],
};

export const accountField: React.FC = () => (
    <AccountField username={text("username", "Username")} />
);

export const logoutButton: React.FC = () => (
    <LogoutButton handleLogout={action("handleLogout")} />
);