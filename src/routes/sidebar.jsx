import React from 'react';
import { useHistory } from 'react-router-dom';
import { SIDE_BAR_CONFIG } from './config';

export default function Sidebar() {
  const history = useHistory();

  return (
    <div className="fixed flex flex-col pt-5 items-center bg-blue-900 w-1/6 h-screen shadow-2xl">
      <p className="w-full text-center text-4xl text-indigo-100 border-indigo-100 border-b-2">Tail UI</p>
      {
                Object.keys(SIDE_BAR_CONFIG).map((key) => (
                  <div className="w-full pt-5">
                    <p className="font-bold text-indigo-100 m-2">{key}</p>
                    {
                            SIDE_BAR_CONFIG[key].map((config) => (
                              <p
                                className="w-full text-left mx-6 text-indigo-100 cursor-pointer hover:text-teal-300"
                                onClick={() => history.push(config.path)}
                                role="presentation"
                              >
                                {config.title}
                              </p>
                            ))
                        }
                  </div>
                ))
            }
    </div>
  );
}
