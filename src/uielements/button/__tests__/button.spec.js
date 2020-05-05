import React from 'react';
import { render } from 'test-utils';
import Button from 'uielements/button/button.component.js';

// Testing Normal Button
it('should take a snapshot', () => {
    const { asFragment } = render(<Button buttonText="test button" />)

    expect(asFragment(<Button buttonText="test button" />)).toMatchSnapshot()
});

// Testing Rounded Prop
it('should take a snapshot', () => {
    const { asFragment } = render(<Button rounded />)

    expect(asFragment(<Button rounded />)).toMatchSnapshot()
});

// Testing Background Color Prop
it('should take a snapshot', () => {
    const { asFragment } = render(<Button bgColor="red" />)

    expect(asFragment(<Button bgColor="red" />)).toMatchSnapshot()
});

// Testing color Prop of the Button 
it('should take a snapshot', () => {
    const { asFragment } = render(<Button color="red" />)

    expect(asFragment(<Button color="red" />)).toMatchSnapshot()
});

// Testing classname of Button
it('should take a snapshot', () => {
    const { asFragment } = render(<Button className="shadow" />)

    expect(asFragment(<Button className="shadow" />)).toMatchSnapshot()
});