import React from 'react';
import { render } from 'test-utils';
import  Container from 'uielements/container/Container.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Container />)
    
    expect(asFragment(<Container />)).toMatchSnapshot()
});

it('should render a raised container', () => {
    const { asFragment } = render(<Container className="w-full h-20 border border-gray-200" raised />)
    
    expect(asFragment(<Container className="w-full h-20 border border-gray-200" raised />)).toMatchSnapshot()
});

it('should render a fluid container', () => {
    const { asFragment } = render(<Container className="h-20 border border-gray-200" fluid />)
    
    expect(asFragment(<Container className="h-20 border border-gray-200" fluid />)).toMatchSnapshot()
});

it('should render a rounded container', () => {
    const { asFragment } = render(<Container className="h-20 border border-gray-200" rounded />)
    
    expect(asFragment(<Container className="h-20 border border-gray-200" rounded />)).toMatchSnapshot()
});

it('should render a rounded container', () => {
    const { asFragment } = render(<Container className="h-20 border border-gray-200 p-2" vertical>
    <p>Hello!!!</p>
    <p>Welcome to TailUI</p>
</Container>)
    
    expect(asFragment(<Container className="h-20 border border-gray-200 p-2" vertical>
    <p>Hello!!!</p>
    <p>Welcome to TailUI</p>
</Container>)).toMatchSnapshot()
});
