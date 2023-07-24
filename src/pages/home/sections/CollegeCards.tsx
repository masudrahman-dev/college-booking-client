import React from 'react';
import Card from '../../../components/ui/card/Card';

interface College {
  id: number;
  name: string;
  admissionDates: string;
  events: string;
  researchHistory: string;
  sports: string;
  imageUrl: string;
}

const collegesData: College[] = [
  {
    id: 1,
    name: "Sample College 1",
    admissionDates: "August 1 - August 15",
    events: "Annual Fest, Sports Meet",
    researchHistory: "Founded in 1965, notable research in Science",
    sports: "Football, Basketball, Table Tennis",
    imageUrl: "https://via.placeholder.com/400",
  },
  {
    id: 2,
    name: "Sample College 3",
    admissionDates: "July 20 - August 10",
    events: "Cultural Week, Tech Symposium",
    researchHistory: "Established in 1970, leading research in Technology",
    sports: "Cricket, Badminton, Chess",
    imageUrl: "https://via.placeholder.com/400",
  },
  {
    id: 3,
    name: "Sample College 4",
    admissionDates: "July 20 - August 10",
    events: "Cultural Week, Tech Symposium",
    researchHistory: "Established in 1970, leading research in Technology",
    sports: "Cricket, Badminton, Chess",
    imageUrl: "https://via.placeholder.com/400",
  },
  {
    id: 4,
    name: "Sample College 2",
    admissionDates: "July 20 - August 10",
    events: "Cultural Week, Tech Symposium",
    researchHistory: "Established in 1970, leading research in Technology",
    sports: "Cricket, Badminton, Chess",
    imageUrl: "https://via.placeholder.com/400",
  },
  // Add more college data as needed
];

const CollegeCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {collegesData.map((college) => (
        <Card key={college.id} college={college} />
      ))}
    </div>
  );
};

export default CollegeCards;
