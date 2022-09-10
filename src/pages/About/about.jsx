import React from 'react';
import { Socialsdata } from '../../components/Data';
import { aboutphoto } from '../../assets/index';

function About() {
  return (
    <>
      <section className="border-x-2 border-black h-full py-10 md:py-32">
        <div className="container mx-auto px-10 md:px-20 grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl  md:text-5xl font-bold mb-6">My Story</h1>
            <p className="mb-2 text-base md:text-lg md:text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              neque asperiores quas fugiat, quod error expedita voluptate aut.
              Neque dolor sapiente odio in? Voluptas eius beatae officia
              inventore architecto asperiores! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint laboriosam expedita
              consequatur! Odit repellat beatae quae id non incidunt. Similique
              minus aperiam modi officiis a impedit mollitia sapiente ducimus
              voluptatum.
            </p>
            <p className=" text-base md:text-lg mb-6 md:text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
              mollitia nulla. Veritatis labore eveniet neque illo placeat ea
              aliquid omnis, vel sequi sed nostrum eum soluta. Explicabo
              deleniti consequatur eum!
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
    </>
  );
}

export default About;
