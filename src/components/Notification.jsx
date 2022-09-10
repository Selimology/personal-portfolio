import React from 'react';
import { Link } from 'react-router-dom';

function Notification() {
  return (
    <>
      <section className=" px-4  hover:text-white cursor-pointer border-t-2 border-black ease-in-out duration-100 bg-yellow-300 hover:bg-black">
        <Link to="/contact">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between md:px-20 gap-8 py-9 md:py-14 ">
            <div className="flex-col items-center">
              <h2 className="text-xl md:text-2xl text-center md:text-left ">
                Have a project in mind?
              </h2>
              <h1 className="text-3xl text-center md:text-left lg:text-5xl font-bold">
                Let's get to work!
              </h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 "
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

export default Notification;
