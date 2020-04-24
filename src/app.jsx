import React from 'react';
import Button from 'uielements/button/button.component';
import logo from './logo.png';
import tail from './tail.png';
import 'assets/css/main.css';
import './app.scss';

export default function App() {
  return (
    <div className="bg-blue-900 flex flex-col justify-center items-center p-20">
      <p className="text-4xl text-blue-100">Welcom To Tail UI!</p>
      <p className="text-2xl text-blue-100">React UI Components Built Using TailwindCSS!</p>
      <div className="flex items-center justify-center"> 
        <img src={logo} className="app--image" alt="logo" />
        <p className="text-6xl text-blue-100 img-divider font-bold">+</p>
        <img src={tail} className="app--image" alt="tail" />
      </div>
      <Button buttonText="Get Started!" />
    </div>
  );
}
