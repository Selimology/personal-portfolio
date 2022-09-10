import React, { useState } from 'react';
import { Projectsdata } from './Data';

function Projects() {
  const [data, setData] = useState(Projectsdata);
  const [active, setActive] = useState('All');

  const FilterResult = (item) => {
    const result = Projectsdata.filter((project) => {
      return project.Category === item;
    });
    setData(result);
    setActive(item);
  };

  return (
    <section className="px-4 pb-12 border-black border-t-2 bg-teal-600">
      <div className="container mx-auto">
        <div className=" pt-12 pb-4 md:pb-12 md:pt-12  ">
          <h1
            id="projects"
            className="text-center text-white font-bold text-3xl md:text-5xl pb-4"
          >
            Selected Projects
          </h1>
        </div>
        <div className="md:flex md:justify-center md:gap-4 mb-10 md:mb-20">
          <button
            onClick={() => {
              setData(Projectsdata);
              setActive('All');
            }}
            className={`text-lg font-bold flex-wrap px-6 py-3 m-2  border-black border-2  tracking-wider  transition-all ease-in
          ${
            active === 'All'
              ? 'bg-yellow-300  md:px-48'
              : 'bg-white hover:bg-gray-100'
          }`}
          >
            All
          </button>
          <button
            onClick={() => FilterResult('Web App')}
            className={`text-lg font-bold flex-wrap px-6 py-3 m-2  border-black border-2  tracking-wider  transition-all ease-in
          ${
            active === 'Web App'
              ? 'bg-yellow-300 md:px-48'
              : 'bg-white hover:bg-gray-100'
          }`}
          >
            Web App
          </button>
          <button
            onClick={() => FilterResult('Mobile App')}
            className={`text-lg font-bold flex-wrap px-6 py-3 m-2  border-black border-2  tracking-wider  transition-all ease-in ${
              active === 'Mobile App'
                ? 'bg-yellow-300  md:px-48'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            Mobile App
          </button>
          <button
            onClick={() => FilterResult('UI/UX')}
            className={`text-lg font-bold flex-wrap px-6 py-3 m-2  border-black border-2  tracking-wider  transition-all ease-in ${
              active === 'UI/UX'
                ? 'bg-yellow-300  md:px-48 '
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            UI/UX
          </button>
        </div>

        <div className="grid place-items-center md:grid-cols-2 gap-8 container mb-20 ">
          {data?.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className=" hover:translate-y-[-4px] hover:drop-shadow-[7px_-8px_0_rgba(0,0,0,1)] md:hover:drop-shadow-[10px_-8px_0_rgba(0,0,0,1)"
                >
                  <a
                    href={item.websitelink}
                    alt="alt"
                    className="ease-in-out duration-75 ]"
                  >
                    <div className="border-2 border-black max-w-lg">
                      <img
                        src={item.thumbnail}
                        alt={item.alt}
                        loading="lazy"
                        className="filter grayscale hover:grayscale-0 transition-all ease-in-out duration-500 max-w-full"
                      />
                    </div>
                  </a>
                  <div className="bg-white border-x-2 border-b-2  border-black px-4 py-1  text-lg flex flex-col items-center ">
                    <span className="font-bold">{item.title}</span>
                    <span className="text-gray-500 italic ">
                      {item.technologies}
                    </span>
                  </div>
                  <div className="flex  border-x-2 border-black  border-b-2 ">
                    <a
                      className=" bg-yellow-300 flex-1 p-2 flex items-center justify-evenly font-bold hover:bg-yellow-400 "
                      href={item.githublink}
                    >
                      Github
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      className="bg-yellow-300 hover:bg-yellow-400 flex-1 items-center justify-evenly  font-bold flex"
                      href={item.websitelink}
                    >
                      Website
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
