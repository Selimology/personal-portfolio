import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function Scroller({ text, link, backgroundColor }) {
  return (
    <section>
      <Link to={link}>
        <Marquee
          gradient={false}
          pauseOnHover={true}
          speed={50}
          className={`${backgroundColor} border-t-4 border-black py-2 text-3xl`}
        >
          {text}
        </Marquee>
      </Link>
    </section>
  );
}

export default Scroller;
