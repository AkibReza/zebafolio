import React from "react";
import background from "../img/3.jpg";
const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="text-center text-white z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-300 via-violet-400 to-purple-300 bg-clip-text text-transparent">
          I am <br />
          Labiba Bushra Zeba
        </h1>
      </div>
    </div>
  );
};

export default Hero;
