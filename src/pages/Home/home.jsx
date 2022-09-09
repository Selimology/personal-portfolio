import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scroller } from '../../components';
import { profilephoto } from '../../assets/index';
import Projects from '../../components/Projects';

function Home() {
  const [data, setData] = useState(Projects);
  const [active, setActive] = useState('All');

  const FilterResult = (item) => {
    const result = Projects.filter((project) => {
      return project.Category === item;
    });
    setData(result);
    setActive(item);
  };

  return (
    <div className="border-black border-x-4">
      <section className="py-10 lg:py-28 xl:py-32">
        <div className="container mx-auto gap-8 px-20 flex flex-col md:flex-row items-center ">
          <div className="md:flex-1 md:order-2">
            <picture className="flex justify-center drop-shadow-[10px_-10px_0_rgba(253,224,71,1)]  ">
              <source
                srcSet={profilephoto}
                type="image/png"
                width="300"
                height="300"
                media="(max-width: 320px)"
              />
              <source
                srcSet={profilephoto}
                type="image/png"
                width="300"
                height="300"
                media="(max-width: 767px)"
              />
              <img
                src={profilephoto}
                height={400}
                width={400}
                alt="Kamil Ertekin"
              />
            </picture>
          </div>
          <div className="md:flex-1 flex-col  ">
            <h2 className="text-lg  md:text-3xl uppercase  hover:tracking-wider tracking-wide ease-in-out duration-200 mb-2">
              Hello<span className="waving-hand">👋🏻</span>
              I'm Kamil.
            </h2>
            <h1 className=" text-3xl font-bold md:text-4xl lg:text-5xl xl:text-7xl mb-4 ">
              Frontend Developer
            </h1>

            <p className="text-base md:text-lg max-w-xl mb-8  ">
              Dynamic and motivated Frontend Developer with experience building
              websites. Skilled in developing websites from scratch and raise
              them into modern, responsive, user-friendly and dependable web
              experiences.
            </p>

            <div className="flex items-baseline  justify-between sm:justify-start md:justify-start gap-4">
              <a
                className="px-4 md:px-8 py-2 md:py-4 rounded-sm bg-teal-600 hover:bg-teal-700 text-white font-bold flex gap-2 border-2 border-black"
                href="https://www.google.com/"
                aria-label="Resume"
                rel="noopener"
                target="_blank"
              >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Scroller
        text={`✨Have a project in mind?✨ Let's work together ✨Have a project in mind?✨ Let's work together✨Have a project in mind?✨ Let's work together`}
        link="/contact"
        backgroundColor="bg-yellow-300"
      />

      <section className="px-4 pb-12 border-black border-t-4 bg-teal-600">
        <div className="container mx-auto">
          <div className=" pt-12 pb-4 md:pb-12 md:pt-12  ">
            <h1 className="text-center text-white font-bold text-3xl md:text-5xl pb-4">
              Selected Projects
            </h1>
          </div>
          <div className="md:flex md:justify-center md:gap-4 mb-10 md:mb-20">
            <button
              onClick={() => {
                setData(Projects);
                setActive('All');
              }}
              className={`text-lg font-bold flex-wrap px-8 py-3 m-2  border-black border-2  tracking-wider  transition-all ease-in
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
              className={`text-lg font-bold flex-wrap px-8 py-3 m-2  border-black border-2  tracking-wider  transition-all ease-in
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
              className={`text-lg font-bold flex-wrap px-8 py-3 m-2  border-black border-2  tracking-wider  transition-all ease-in ${
                active === 'Mobile App'
                  ? 'bg-yellow-300  md:px-48'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              Mobile App
            </button>
            <button
              onClick={() => FilterResult('UI/UX')}
              className={`text-lg font-bold flex-wrap px-8 py-3 m-2  border-black border-2  tracking-wider  transition-all ease-in ${
                active === 'UI/UX'
                  ? 'bg-yellow-300  md:px-48 '
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              UI/UX
            </button>
          </div>

          <div className="grid place-items-center md:grid-cols-2 gap-8 container mb-20 ">
            {data.map(
              ({
                title,
                Category,
                thumbnail,
                alt,
                githublink,
                websitelink,
                technologies,
              }) => {
                return (
                  <>
                    <div className=" hover:translate-y-[-4px] hover:drop-shadow-[7px_-8px_0_rgba(0,0,0,1)] md:hover:drop-shadow-[10px_-8px_0_rgba(0,0,0,1)">
                      <a
                        href={websitelink}
                        alt="alt"
                        className="ease-in-out duration-75 ]"
                      >
                        <div className="border-2 border-black max-w-lg">
                          <img
                            src={thumbnail}
                            alt={alt}
                            loading="lazy"
                            className="filter grayscale hover:grayscale-0 transition-all ease-in-out duration-500 max-w-full"
                          />
                        </div>
                      </a>
                      <div className="bg-white border-x-2 border-b-2  border-black px-4 py-1  text-lg flex flex-col items-center ">
                        <span className="font-bold">{title}</span>
                        <span className="text-gray-500 italic ">
                          {technologies}
                        </span>
                      </div>
                      <div className="flex  border-x-2 border-black  border-b-2 ">
                        <a
                          className=" bg-yellow-300 flex-1 p-2 flex items-center justify-evenly font-bold hover:bg-yellow-400 "
                          href={githublink}
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
                          href={websitelink}
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
              }
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
