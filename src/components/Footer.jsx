import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Notification from './Notification';

function Footer() {
  return (
    <>
      <footer className=" grid grid-cols-2 md:grid-cols-[200px_1fr_200px] border-y-2 border-black border-solid bg-white ">
        <div
          className="flex p-2 justify-center items-center text-base md:text-xl  border-black select-none border-x-2 md:border-l-2 md:border-x-0
          "
        >
          Kertekin &#169; 2022
        </div>

        <HashLink
          to="#header"
          className="md:col-start-3 flex justify-center items-center border-black p-2 hover:bg-gray-200 border-r-2 md:border-l-0 gap-4 text-base md:text-xl  "
        >
          Back to Top{' '}
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
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </HashLink>

        <nav className="col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 flex items-center justify-center text-base md:text-xl border-black border-t-2 border-x-2 md:border-t-0 ">
          <ul className="flex gap-4 p-2 max-w-xs md:max-w-lg snap-always ">
            <li>
              <a
                className="hover:text-gray-600"
                href="mailto:kertekin.business@gmail.com"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Selimology"
                target="_blank"
                className="hover:text-gray-600"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kamil-ertekin-64a7a9208/"
                target="_blank"
                className="hover:text-gray-600"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;

// Kamil Ertekin &#169; 2022
