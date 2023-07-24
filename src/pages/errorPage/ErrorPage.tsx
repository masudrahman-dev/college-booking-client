// 404.tsx
import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Text fontSize="4xl" fontWeight="bold" color="red.500" mb={4}>
        404 - Page Not Found
      </Text>
      <Text fontSize="lg" mb={8}>
        Oops! Looks like you've reached a page that doesn't exist.
      </Text>
      <Button as={Link} to="/" colorScheme="blue">
        Go back to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
