/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from 'enzyme';
import { Dropdown } from '../Dropdown';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    })

    test('should render (snapshot)', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)

        expect(wrapper).toMatchSnapshot();
    })
})