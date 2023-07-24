// src/components/Card.tsx
import React from "react";
import { Link } from "react-router-dom";

type CardProps = {
  college: {
    name: string;
    admissionDates: string;
    events: string;
    researchHistory: string;
    sports: string;
    imageUrl: string;
    id: number;
  };
};

const Card: React.FC<CardProps> = ({ college }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={
          "https://source.unsplash.com/user/c_v_r/1600x900" || college.imageUrl 
        }
        alt={college.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
        <p>Admission Dates: {college.admissionDates}</p>
        <p>Events: {college.events}</p>
        <p>Research History: {college.researchHistory}</p>
        <p>Sports: {college.sports}</p>
        <Link
          to={`/colleges/${college.id}`} // Assuming you have a separate route for college details
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
