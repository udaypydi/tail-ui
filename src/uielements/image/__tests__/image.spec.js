import React from 'react';
import { render } from 'test-utils';
import  Image from 'uielements/image/image.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Image />)
    
    expect(asFragment(<Image />)).toMatchSnapshot()
});
