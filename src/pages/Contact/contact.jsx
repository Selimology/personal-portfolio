import React from 'react';

function Contact() {
  return (
    <section className="border-x-2 border-black h-full py-10 md:py-24">
      <div className="container mx-auto px-10 md:px-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl  md:text-5xl font-bold mb-6">Contact</h1>
          <p className="mb-2 text-base md:text-lg md:text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            neque asperiores quas fugiat, quod error expedita voluptate aut.
            Neque dolor sapiente odio in? Voluptas eius beatae officia inventore
            architecto asperiores! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sint laboriosam expedita consequatur! Odit
            repellat beatae quae id non incidunt. Similique minus aperiam modi
            officiis a impedit mollitia sapiente ducimus voluptatum.
          </p>
        </div>
        <form
          action="https://formsubmit.co/972c93d25fba02a4b2b3de31d3b4c6a5"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Email from Portfolio Website!"
          />
          <div className="w-full mb-4">
            <label className="form-label inline-block mb-2 " htmlFor="name">
              Your Name
            </label>
            <input
              className="block w-full px-3 py-2 border-gray-700 border-2 "
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="form-label inline-block mb-2 " htmlFor="email">
              Your Email
            </label>
            <input
              className="font-fa block w-full px-3 py-2 border-gray-700 border-2 "
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="form-label inline-block mb-2 " htmlFor="message">
              Your Message
            </label>
            <textarea
              className="font-fa block w-full px-3 py-2 border-gray-700 border-2 "
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            className="px-4 md:px-8 py-2 md:py-2 rounded-sm bg-teal-600 hover:bg-teal-700 text-white font-bold  border-2 border-black "
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
