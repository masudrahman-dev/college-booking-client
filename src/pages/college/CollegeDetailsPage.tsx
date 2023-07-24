import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text } from '@chakra-ui/react';

interface CollegeDetails {
  id: string;
  image: string;
  name: string;
  admissionDates: string;
  events: string;
  researchHistory: string;
  sports: string;
}

const colleges: CollegeDetails[] = [
  {
    id: '1',
    name: 'Example College 1',
    image: 'https://source.unsplash.com/user/c_v_r/1600x900',
    admissionDates: 'September 2023',
    events: 'Event 1, Event 2',
    researchHistory: 'History 1, History 2',
    sports: 'Football, Basketball',
  },
  {
    id: '2',
    name: 'Random University',
    image: 'https://source.unsplash.com/random/1600x900',
    admissionDates: 'October 2023',
    events: 'Orientation Day, Alumni Meet',
    researchHistory: 'Pioneering Research in Technology',
    sports: 'Soccer, Volleyball',
  },
  {
    id: '3',
    name: 'Tech Institute',
    image: 'https://source.unsplash.com/featured/1600x900',
    admissionDates: 'August 2023',
    events: 'Tech Fest, Hackathon',
    researchHistory: 'Innovation and Engineering Research',
    sports: 'Cricket, Table Tennis',
  },
  {
    id: '4',
    name: 'Arts College',
    image: 'https://source.unsplash.com/user/erondu/1600x900',
    admissionDates: 'July 2023',
    events: 'Art Exhibition, Cultural Fest',
    researchHistory: 'Promoting Creativity and Culture',
    sports: 'Basketball, Badminton',
  },
  {
    id: '5',
    name: 'Medical University',
    image: 'https://source.unsplash.com/user/andreas160578/1600x900',
    admissionDates: 'November 2023',
    events: 'Medical Conference, Health Fair',
    researchHistory: 'Advancing Medical Sciences',
    sports: 'Swimming, Athletics',
  },
  {
    id: '6',
    name: 'Business School',
    image: 'https://source.unsplash.com/user/antonioguillem/1600x900',
    admissionDates: 'December 2023',
    events: 'Entrepreneurship Summit, Career Fair',
    researchHistory: 'Business and Management Studies',
    sports: 'Golf, Chess',
  },
  {
    id: '7',
    name: 'Law College',
    image: 'https://source.unsplash.com/user/willianjusten/1600x900',
    admissionDates: 'January 2024',
    events: 'Moot Court Competition, Legal Seminar',
    researchHistory: 'Advocacy and Legal Research',
    sports: 'Tennis, Squash',
  },
  {
    id: '8',
    name: 'Science Academy',
    image: 'https://source.unsplash.com/user/nikarthur/1600x900',
    admissionDates: 'February 2024',
    events: 'Science Expo, Research Symposium',
    researchHistory: 'Cutting-edge Scientific Discoveries',
    sports: 'Hockey, Fencing',
  },
  {
    id: '9',
    name: 'Music Conservatory',
    image: 'https://source.unsplash.com/user/creaslim/1600x900',
    admissionDates: 'March 2024',
    events: 'Music Festival, Masterclasses',
    researchHistory: 'Preserving Music Heritage',
    sports: 'Dance, Yoga',
  },
  {
    id: '10',
    name: 'Engineering College',
    image: 'https://source.unsplash.com/user/austindistel/1600x900',
    admissionDates: 'April 2024',
    events: 'Tech Expo, Robotics Competition',
    researchHistory: 'Innovative Engineering Solutions',
    sports: 'Cricket, Football',
  },
];

const CollegeDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the college with the given id
  const college = colleges.find((college) => college.id === id);

  if (!college) {
    return <Text>No college found with the provided ID.</Text>;
  }

  return (
    <Box p={4}>
      <Image src={college.image} alt={college.name} height="300px" objectFit="cover" />
      <Text fontWeight="bold" mt={2}>
        {college.name}
      </Text>
      {/* Display other college details here */}
      <Text mt={2}>{`Admission Dates: ${college.admissionDates}`}</Text>
      <Text mt={2}>{`Events: ${college.events}`}</Text>
      <Text mt={2}>{`Research History: ${college.researchHistory}`}</Text>
      <Text mt={2}>{`Sports: ${college.sports}`}</Text>
    </Box>
  );
};

export default CollegeDetailsPage;
