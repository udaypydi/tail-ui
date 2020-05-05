import React from 'react';
import { render } from 'test-utils';
import  Input from 'uielements/input/input.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Input />)
    
    expect(asFragment(<Input />)).toMatchSnapshot()
});
