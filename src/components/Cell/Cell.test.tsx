import React from 'react';
import { shallow } from "enzyme";
import Cell, { CellProps } from './Cell';

const onHandleClick = jest.fn();

const props: CellProps = {
    alive: true,
    handleClick: onHandleClick,
}

const item = <Cell {...props} />

describe("TodoListItem", () => {
    const wrapper = shallow(item);

    it("render item with data", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("simulate click Cell should call method", () => {
        wrapper.simulate('click');
        expect(onHandleClick).toHaveBeenCalled();
    });

});
