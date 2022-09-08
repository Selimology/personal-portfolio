import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function Scroller({ text, link }) {
  return (
    <section>
      <Link to={link}>
        <Marquee
          gradient={false}
          pauseOnHover={true}
          speed={50}
          className=" bg-yellow-300 border-y-4 border-black py-2 text-3xl"
        >
          {text}
        </Marquee>
      </Link>
    </section>
  );
}

export default Scroller;
