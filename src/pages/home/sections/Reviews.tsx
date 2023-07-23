// src/ResearchPapers.tsx

import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';


interface Review {
  collegeName: string;
  review: string;
}



const reviews: Review[] = [
  {
    collegeName: 'College 1',
    review: 'This is a great college!',
  },
  {
    collegeName: 'College 2',
    review: 'The faculty is excellent.',
  },
  // Add more reviews as needed
];

const Reviews: React.FC = () => {
  return (
    <Box m="4" mx="auto" maxW="600px">
      <VStack spacing="4" align="flex-start">
        <Box>
          <Heading as="h2" size="lg" fontWeight="bold">
            Reviews
          </Heading>
          {reviews.map((review, index) => (
            <Box key={index}>
              <Heading as="h3" size="md" fontWeight="semibold">
                {review.collegeName}
              </Heading>
              <p>{review.review}</p>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>



  );
};

export default Reviews;
