import React from 'react';
import { render } from 'test-utils';
import  Image from 'uielements/image/image.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Image src="https://www.google.com" />)
    
    expect(asFragment(<Image src="https://www.google.com" />)).toMatchSnapshot()
});


it('should render a rounded image', () => {
    const { asFragment } = render(<Image 
        className="h-64 w-64" 
        src="https://www.peakfitness.co.nz/wp-content/uploads/2016/02/placeholder-10.jpg" 
        rounded 
    />)
    
    expect(asFragment(<Image 
        className="h-64 w-64" 
        src="https://www.peakfitness.co.nz/wp-content/uploads/2016/02/placeholder-10.jpg" 
        rounded 
    />)).toMatchSnapshot()
});

it('should render a image as hyperlink', () => {
    const { asFragment } = render(<Image 
        className="h-64 w-64" 
        src="https://www.peakfitness.co.nz/wp-content/uploads/2016/02/placeholder-10.jpg" 
        href="https://tailwindcss.com"
    />)
    
    expect(asFragment(<Image 
        className="h-64 w-64" 
        src="https://www.peakfitness.co.nz/wp-content/uploads/2016/02/placeholder-10.jpg" 
        href="https://tailwindcss.com"
    />)).toMatchSnapshot()
});

it('should render an elevated image', () => {
    const { asFragment } = render(<Image 
        className="h-64 w-64" 
        src="https://www.peakfitness.co.nz/wp-content/uploads/2016/02/placeholder-10.jpg" 
        elevated
    />)
    
    expect(asFragment(<Image 
        className="h-64 w-64" 
        src="https://www.peakfitness.co.nz/wp-content/uploads/2016/02/placeholder-10.jpg" 
        elevated
    />)).toMatchSnapshot()
});
