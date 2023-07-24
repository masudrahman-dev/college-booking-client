// src/App.tsx

import React from "react";

interface College {
  name: string;
  image: string;
  rating: number;
  admissionDate: string;
  researchCount: number;
  events: string[];
  sportsFacilities: string[];
}

const colleges: College[] = [
  {
    name: "College 1",
    image: "college-1.jpg",
    rating: 4.5,
    admissionDate: "August 2023",
    researchCount: 50,
    events: ["Event A", "Event B"],
    sportsFacilities: ["Football", "Basketball"],
  },
  {
    name: "College 2",
    image: "college-2.jpg",
    rating: 4.2,
    admissionDate: "September 2023",
    researchCount: 40,
    events: ["Event C", "Event D"],
    sportsFacilities: ["Cricket", "Tennis"],
  },
  // Add more colleges as needed
];

const College: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Colleges List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colleges.map((college, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={
                "	https://source.unsplash.com/user/c_v_r/1600x900" ||
                college.image
              }
              alt={college.name}
              className="w-full h-32 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{college.name}</h2>
            <p>Rating: {college.rating}</p>
            <p>Admission Date: {college.admissionDate}</p>
            <p>Research Count: {college.researchCount}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() =>
                alert(
                  `Details for ${
                    college.name
                  }: \n\nEvents: ${college.events.join(
                    ", "
                  )}\n\nSports Facilities: ${college.sportsFacilities.join(
                    ", "
                  )}`
                )
              }
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default College;
