import React from 'react';

function About() {
  return (
    <section className="border-x-2 border-black h-full py-10 md:py-32">
      <div className="container mx-auto px-10 md:px-20 grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl  md:text-5xl font-bold mb-6">My Story</h1>
          <p className="mb-2 text-lg text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            neque asperiores quas fugiat, quod error expedita voluptate aut.
            Neque dolor sapiente odio in? Voluptas eius beatae officia inventore
            architecto asperiores! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sint laboriosam expedita consequatur! Odit
            repellat beatae quae id non incidunt. Similique minus aperiam modi
            officiis a impedit mollitia sapiente ducimus voluptatum.
          </p>
          <p className="text-lg mb-6 text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            mollitia nulla. Veritatis labore eveniet neque illo placeat ea
            aliquid omnis, vel sequi sed nostrum eum soluta. Explicabo deleniti
            consequatur eum!
          </p>

          <div className="text-xl font-bold">My socials:</div>
        </div>
        <div>Image</div>
      </div>
    </section>
  );
}

export default About;
