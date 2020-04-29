import React from 'react';
import { render } from 'test-utils';
import  Select from 'uielements/select/select.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Select />)
    
    expect(asFragment(<Select />)).toMatchSnapshot()
});
