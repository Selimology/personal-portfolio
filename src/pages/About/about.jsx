import React from 'react';
import { Socialsdata } from '../../components/Data';
import { aboutphoto } from '../../assets/index';
import { Notification } from '../../components';

function About() {
  return (
    <>
      <div className="flex flex-col h-full">
        <section className="border-x-2 border-black h-full py-10 md:py-24">
          <div className="container mx-auto px-10 md:px-20 grid gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl  md:text-5xl font-bold mb-6">My Story</h1>
              <p className="mb-2 text-base md:text-lg md:text-justify">
                Hi, I'm Kamil Ertekin. I'm a Frontend Developer with a passion
                for creating beautiful and functional websites. I have a strong
                background in web development and I'm always looking for new
                challenges. I graduated from the Epoka University with Bachelors
                in Computer Engineering. As a developer I love to learn new
                things and I'm always looking for new opportunities to improve
                my skills.
              </p>
              <p className=" text-base md:text-lg mb-6 md:text-justify ">
                In my free time I like to play video games, watch movies and
                series, and I also like to read books. I'm also a big fan of new
                Animes and Manga. More than happy to recommend you some hidden
                gems out there.
              </p>

              <div className="text-xl font-bold mb-4">My socials:</div>
              <div className="mb-8">
                <ul className="flex md:flex-row  flex-col flex-wrap gap-4 md:gap-8 max-w-max">
                  {Socialsdata.map((item, index) => (
                    <li key={index}>
                      <a
                        target="_blank"
                        rel="noopenner noreferrer"
                        href={item.link}
                        className="flex items-center gap-4 hover:transform hover:scale-110 transition-all ease-in-out"
                      >
                        {item.name}
                        <img src={item.icon} alt={item.alt} width={30} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex  items-center justify-start lg:justify-center ">
              <picture className="flexjustify-center drop-shadow-[10px_-10px_0_rgba(253,224,71,1)]  ">
                <img
                  src={aboutphoto}
                  height={100}
                  width={500}
                  alt="Kamil Ertekin"
                />
              </picture>
            </div>
          </div>
        </section>
        <Notification />
      </div>
    </>
  );
}

export default About;
