import React from 'react';
import { profilephoto } from '../assets/index';

function Hero() {
  return (
    <section className="py-10 lg:py-28 xl:py-32">
      <div className="container mx-auto gap-8 px-10 md:px-20 flex flex-col md:flex-row items-center ">
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
            websites. Skilled in developing websites from scratch and raise them
            into modern, responsive, user-friendly and dependable web
            experiences.
          </p>

          <div className="flex items-baseline  justify-between sm:justify-start md:justify-start gap-4">
            <a
              className="px-4 md:px-8 py-2 md:py-4 rounded-sm bg-teal-600 hover:bg-teal-700 text-white font-bold flex gap-2 border-2 border-black"
              href="https://drive.google.com/file/d/1qa9dIzSgHEuczNkb2Na-Z8h6HWSjyWGW/view?usp=sharing"
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
  );
}

export default Hero;
