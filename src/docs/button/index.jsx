import React from 'react';
import Button from 'uielements/button/button.component';

function ButtonDoc() {
  return (
    <div className="p-10">
      <p className="text-4xl">Button</p>
      <p>A button indicates a possible user action.</p>
      <p className="w-full border-b-2 pb-1 mt-5 mb-10 text-blue-700 text-2xl">Props</p>
      <div className="m-2 w-11/12 shadow p-5">
        <div className="flex justify-between p-5 font-bold">
          <p className="text-left w-2/6">Name</p>
          <p className="text-left w-2/6">Type</p>
          <p className="text-left w-2/6">Description</p>
        </div>
        <div className="flex justify-between border-b-2 p-5">
          <p className="text-left w-2/6">buttonText</p>
          <p className="text-left w-2/6">string</p>
          <p className="text-left w-2/6">A custom text that is to be displayed inside the button</p>
        </div>
        <div className="flex justify-between border-b-2 p-5">
          <p className="text-left w-2/6">onClick</p>
          <p className="text-left w-2/6">function</p>
          <p className="text-left w-2/6">On click handler for button</p>
        </div>
      </div>
      <p className="w-full border-b-2 pb-1 mt-5 mb-10 text-blue-700 text-2xl">Types</p>
      <div className="m-2 w-11/12 shadow p-5">
        <p>Default Button</p>
        <Button />
      </div>
    </div>
  );
}

export default ButtonDoc;
