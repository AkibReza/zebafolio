import React from "react";

const Experiences = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Work Experiences
        </h2>
        <ul>
          <li className="mb-4">
            <h3 className="text-lg font-bold">
              Volunteer (Vaccination Program 1 year)
            </h3>
            <p className="text-gray-600">
              Bangladesh Red Crescent Youth(BDRCY)
            </p>
            <ul className="list-disc ml-4">
              <li>Working under pressure</li>
              <li>Crowd handling</li>
              <li>Continuous communication</li>
              <li>Uninterrupted Service</li>
            </ul>
            <h3 className="text-lg font-bold">
              Worked as a moderator in a Fashion Jwellery Page in Facebook
            </h3>
            <p className="text-gray-600">(Sassy Girls)</p>
          </li>
          {/* add more list items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
