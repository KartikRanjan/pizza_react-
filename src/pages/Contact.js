import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-medium border-b-2 py-4">
        Contacts
      </h1>
      <div>
        <img
          className="mx-auto rounded-full mt-10"
          src="./images/photo_aai.jpg"
          alt="profile_pic"
        ></img>
        <h1 className="text-4xl md:text-5xl text-center font-bold font-serif pt-6">
          <em>KartiK Kr RanjaN</em>
        </h1>
        <p className="text-xl font-semibold text-center font-serif py-2">
          a <u>MERN</u> Stack Developer
        </p>
      </div>
      <div className="text-3xl md:text-4xl text-center font-bold font-serif mt-3">
        <a className="px-6" href="mailto: kkrbglr@gmail.com">
          <i class="fas fa-envelope"></i>
        </a>

        <a className="px-6" href="tel:+917008978799">
          <i class="fa fa-phone"></i>
        </a>
        <a className="px-6" href="https://twitter.com/kkrdnbd">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div className="py-8">
        <div className="mx-auto text-3xl md:text-4xl text-center font-bold font-serif pt-4">
          <a href="#hello">
            <i class=" fas fa-location-arrow"></i>
          </a>
        </div>

        <p className="mx-auto text-lg text-center w-4/5 sm:w-1/3 font-semibold font-sans">
          Mantri Serenity, Doddakallasandra, Kanakpura Road, South Bangalore,
          Karnataka 560062
        </p>
      </div>
    </div>
  );
};

export default About;
