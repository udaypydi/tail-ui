import React from 'react';
import { render } from 'test-utils';
import Header from 'uielements/header/header.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Header />)
    
    expect(asFragment(<Header />)).toMatchSnapshot()
});
