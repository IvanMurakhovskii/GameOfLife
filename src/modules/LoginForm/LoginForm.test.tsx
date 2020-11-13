import React from 'react';
import { mount } from "enzyme";
import LoginForm from './LoginForm';

const item = <LoginForm />

describe("LoginForm", () => {
    const wrapper = mount(item);
    it("render item with data", () => {
        expect(wrapper).toMatchSnapshot();
    });
});