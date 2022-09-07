import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeClass = 'text-yellow-500';

function Header() {
  return (
    <>
      <header className="grid grid-cols-2 md:grid-cols-[200px_1fr_200px] border-b-4 border-black border-solid bg-white ">
        <Link
          to="/"
          className="flex  justify-center items-center text-3xl md:text-4xl p-3 border-black border-r-4
          hover:tracking-wider ease-in duration-200 text-yellow"
        >
          Kamil
        </Link>

        <Link
          to="/content"
          className="md:col-start-3 p-3 flex justify-center items-center border-black md:border-l-4 gap-4 text-3xl md:-text-4xl bg-yellow-300 hover:bg-yellow-500 ease-in-out duration-75 "
        >
          Let's Talk!
        </Link>

        <nav className="col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 flex items-center justify-center text-xl md:text-4xl p-3 border-black border-t-4 md:border-t-0 ">
          <ul className="flex gap-6 p-2 max-w-sm md:max-w-lg overflow-auto  snap-always ">
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
