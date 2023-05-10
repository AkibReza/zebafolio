import React from "react";

const Achievements = () => {
  const achievementList = [
    { data: "Active RCY,Bangladesh Red Crescent Society" },
    {
      data: "Participant in BNCD National Photography Competition & Exhibition- 2019",
    },
    {
      data: "Achieved 3rd place in Scrapbook competition in 5th PETROMAX LPG DRMC National Language Festival-2018",
    },
    {
      data: "Achieved 1st place in Annual Sports game competition of South Point College-2019",
    },
    {
      data: "Achieved 3rd place in 100 miter running competition in 41st Annual Sports competition of Banani Bidyaniketan School and College - 2013",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-sky-300 to-violet-500">
      <div
        id="achievements"
        className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Achievements</h2>
        <ul className="list-disc ml-4">
          {achievementList.map((item, index) => (
            <li key={index}>{item.data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
