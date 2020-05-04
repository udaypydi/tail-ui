import React from 'react';
import { render } from 'test-utils';
import  Button from 'uielements/button/button.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Button buttonText="test button" />)
    
    expect(asFragment(<Button buttonText="test button" />)).toMatchSnapshot()
});

it ('should render a button with text color', () => {
    const { asFragment } = render(<Button  color="green" />)
    
    expect(asFragment(<Button color="green"  />)).toMatchSnapshot()
});

it ('should render a button with custom styles', () => {
    const { asFragment } = render(<Button  style={{ background: '#0077b5', color: '#ffffff' }}  />)
    
    expect(asFragment(<Button  style={{ background: '#0077b5', color: '#ffffff' }}  />)).toMatchSnapshot()
});

it ('should render a button with custom tailwind classes', () => {
    const { asFragment } = render(<Button className="text-green-500 border-green-500" />)
    
    expect(asFragment(<Button className="text-green-500 border-green-500" />)).toMatchSnapshot()
});

it ('should render a rounded button', () => {
    const { asFragment } = render(<Button rounded />)
    
    expect(asFragment(<Button rounded />)).toMatchSnapshot()
});

