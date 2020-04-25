import React from 'react';
import logo from 'src/logo.png';
import tail from 'src/tail.png';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <div className="w-full ml-16 text-center">
        <div className="flex items-center justify-center">
          <img src={logo} className="app--image" alt="logo" />
          <p className="text-6xl text-black-100 img-divider font-bold">+</p>
          <img src={tail} className="app--image" alt="tail" />
        </div>
        <p className="text-4xl font-bold">Tail UI React</p>
        <p>The Tail-UI React Documentation</p>
      </div>
    </div>
  );
}
