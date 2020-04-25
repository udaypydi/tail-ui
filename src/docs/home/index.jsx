import React from 'react';
import logo from 'src/logo.png';
import tail from 'src/tail.png';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="w-full text-center pt-10">
        <div className="flex items-center justify-center">
          <img src={logo} className="w-32" alt="logo" />
          <img src={tail} className="w-20" alt="tail" />
        </div>
        <p className="text-4xl font-bold">Tail UI React</p>
        <p>The Tail-UI React Documentation</p>
      </div>
      <p className="w-full text-left pt-10 font-bold text-2xl border-b-2">Introduction</p>
    </div>
  );
}
