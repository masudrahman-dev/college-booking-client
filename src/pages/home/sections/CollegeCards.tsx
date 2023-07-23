import Card from "../../../components/ui/card/Card";

const collegesData = [
  {
    name: "Sample College 1",
    admissionDates: "August 1 - August 15",
    events: "Annual Fest, Sports Meet",
    researchHistory: "Founded in 1965, notable research in Science",
    sports: "Football, Basketball, Table Tennis",
    imageUrl: "https://via.placeholder.com/400",
  },
  {
    name: "Sample College 3",
    admissionDates: "July 20 - August 10",
    events: "Cultural Week, Tech Symposium",
    researchHistory: "Established in 1970, leading research in Technology",
    sports: "Cricket, Badminton, Chess",
    imageUrl: "https://via.placeholder.com/400",
  },
  {
    name: "Sample College 4",
    admissionDates: "July 20 - August 10",
    events: "Cultural Week, Tech Symposium",
    researchHistory: "Established in 1970, leading research in Technology",
    sports: "Cricket, Badminton, Chess",
    imageUrl: "https://via.placeholder.com/400",
  },
  {
    name: "Sample College 2",
    admissionDates: "July 20 - August 10",
    events: "Cultural Week, Tech Symposium",
    researchHistory: "Established in 1970, leading research in Technology",
    sports: "Cricket, Badminton, Chess",
    imageUrl: "https://via.placeholder.com/400",
  },
  // Add more college data as needed
];

const CollegeCards = () => {
  console.log("c");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {collegesData.map((college, index) => (
        <Card key={index} college={college} />
      ))}
    </div>
  );
};

export default CollegeCards;
