import React from 'react';
import { render } from 'test-utils';
import  Container from 'uielements/container/Container.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Container />)
    
    expect(asFragment(<Container />)).toMatchSnapshot()
});
