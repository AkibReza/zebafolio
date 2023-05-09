import React from "react";
import aboutImage from "../img/1.jpg";
import Card from "./Card";

const About = () => {
  return (
    <Card>
      <div className="md:flex-shrink-0">
        <img
          className="h-96 w-full object-cover "
          src={aboutImage}
          alt={"Zeba"}
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {"About Me"}
        </div>
        <p className="mt-2 text-gray-500">{"I am a student."}</p>
        <div className="mt-4"></div>
      </div>
    </Card>
  );
};

export default About;
