import React from "react";

const Card = ({ children }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-6xl my-2">
      <div className="md:flex">{children}</div>
    </div>
  );
};

export default Card;
