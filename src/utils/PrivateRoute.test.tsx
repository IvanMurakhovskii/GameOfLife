import React from "react";
import { mount } from "enzyme";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { actions } from "@/modules/Game/slice";

const MockComponent: React.FC = () => <span>Mock</span>;

const props = {
    redirectPath: '/login',
    path: "/",
    component: MockComponent,
};

const MockBrowserRouter = (
    <BrowserRouter>
        <PrivateRoute {...props} />
    </BrowserRouter>
);

describe("PrivateRouter", () => {
    it("should redirect if not auth", async () => {
        const wrapper = await mount(MockBrowserRouter);
        const wrapperRedirect = wrapper.find(Redirect);
        expect(wrapperRedirect).toHaveLength(1);
    });
});