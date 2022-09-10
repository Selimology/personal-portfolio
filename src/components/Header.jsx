import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeClass = 'text-yellow-500';

function Header() {
  return (
    <>
      <header
        id="header"
        className=" grid grid-cols-2 md:grid-cols-[200px_1fr_200px] border-b-2 border-black border-solid bg-white "
      >
        <Link
          to="/"
          className="flex  justify-center items-center text-2xl md:text-2xl p-3 border-black border-x-2 md:border-l-2 md:border-x-0
          hover:tracking-wider ease-in duration-200 text-yellow"
        >
          Kamil
        </Link>

        <Link
          to="/contact"
          className="md:col-start-3 p-3 flex justify-center items-center border-black border-r-2 md:border-l-0 gap-4 text-2xl md:text-2xl bg-yellow-300 hover:bg-yellow-500 ease-in-out duration-75 "
        >
          Let's Talk!
        </Link>

        <nav className="col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 flex items-center justify-center text-lg md:text-2xl p-3 border-black border-t-2 border-x-2 md:border-t-0 ">
          <ul className="flex gap-4 p-2 max-w-xs md:max-w-lg   snap-always ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
