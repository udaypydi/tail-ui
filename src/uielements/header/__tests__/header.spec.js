import React from 'react';
import { render } from 'test-utils';
import Header from 'uielements/header/header.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Header />);
    
    expect(asFragment(<Header />)).toMatchSnapshot();
});

it('should render a disabled header', () => {
    const { asFragment } = render(<Header text="Header 1" disabled />);
    
    expect(asFragment(<Header text="Header 1" disabled />)).toMatchSnapshot();
});

it('should render multiple header types', () => {
    const { asFragment } = render(<>
    <Header text="Header 1" />
    <Header text="Header 2" type="h2" />
    <Header text="Header 3" type="h3" />
    <Header text="Header 4" type="h4" />
    </>);
    
    expect(asFragment(<>
    <Header text="Header 1" />
    <Header text="Header 2" type="h2" />
    <Header text="Header 3" type="h3" />
    <Header text="Header 4" type="h4" />
    </>)).toMatchSnapshot();
});
