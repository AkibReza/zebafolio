import React from "react";
import aboutImage from "../img/1.jpg";
import Card from "./Card";

const About = () => {
  return (
    <Card>
      <div id="about" className="md:flex-shrink-0">
        <img
          className="h-96 w-full object-cover "
          src={aboutImage}
          alt={"Zeba"}
        />
      </div>
      <div className="p-8">
        <div className="tracking-wide font-bold text-xl text-indigo-500 ">
          {"About Me"}
        </div>
        <p className="mt-2 text-gray-500">
          Hello, my name is Labiba Bushra Zeba and I am currently pursuing a
          degree in the BBA Department at United International University with a
          strong desire to become a successful businesswoman. I am passionate
          about working hard and constantly learning to enhance my skills, as I
          believe this will contribute to my overall experience and development.
          <br />
          My ultimate aspiration is to establish myself as a successful
          entrepreneur, solely investing in my attempts. Additionally, I am
          eager to devote my time and resources towards philanthropic work for
          orphans, with the aim of strengthening the backbone of our nation.
          <br />I am deeply committed to improving mental health and well-being,
          and aspire to use my potential to contribute to this cause. It is my
          firm belief that empowering individuals to feel confident about
          themselves is crucial for overall personal and professional growth.
        </p>
        <div className="mt-4"></div>
      </div>
    </Card>
  );
};

export default About;
