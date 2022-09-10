import React, { useState } from 'react';
import {
  Hero,
  Notification,
  Projects,
  Scroller,
  Skills,
} from '../../components';
import { profilephoto } from '../../assets/index';

function Home() {
  return (
    <div className="border-black border-x-2">
      <Hero />
      <Scroller
        text={`✨Have a project in mind?✨ Let's work together ✨Have a project in mind?✨ Let's work together✨Have a project in mind?✨ Let's work together`}
        link="/contact"
        backgroundColor="bg-yellow-300"
      />
      <Skills />
      <Projects />
    </div>
  );
}
export default Home;
