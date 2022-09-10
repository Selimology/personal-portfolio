import React from 'react';
import { Skillsdata } from './Data';

function Skills() {
  return (
    <section className="px-4 pb-12  border-t-2 border-black bg-white">
      <div className="container mx-auto">
        <div className="pt-12 pb-4 md:pb-12 md:pt-12">
          <h1 className="text-center text-black font-bold text-3xl md:text-5xl pb-10">
            Skills & Technologies
          </h1>
          <div className="flex flex-wrap justify-center gap-4   ">
            {Skillsdata.map((item) => {
              return (
                <div className="flex flex-col items-center gap-4 hover:font-bold transition-all  p-2 filter grayscale hover:grayscale-0  ease-in-out duration-300 drop-shadow-md sm:hover:scale-125 sm:hover:mx-3  ">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-16 h-16 hover:transform 
                    "
                  />
                  <p className="text-center text-black text-lg">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
