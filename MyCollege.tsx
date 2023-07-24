import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,

  Heading,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

interface Review {
  rating: number;
  comment: string;
}

const MyCollege: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const { handleSubmit, control, reset } = useForm<Review>();

  const handleReviewSubmit = (data: Review) => {
    setReviewsList((prevReviewsList) => [...prevReviewsList, data]);
    reset({ rating: 0, comment: "" });
  };

  return (
    <Box m="4" mx="auto" maxW="600px">
      <Heading as="h1" size="xl" textAlign="center" mb="8">
        My College Details
      </Heading>
      <Box bg="white" shadow="md" rounded="lg" p="4" mb="4">
        {/* Display college details here */}
        {/* For this example, let's just show a placeholder */}
        <Heading as="h2" size="lg" fontWeight="semibold" mb="2">
          College Name
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          gravida purus. Nam efficitur venenatis nunc, id fermentum turpis
          vulputate sit amet.
        </p>
        <p>Address: 123 College St, City</p>
        <p>Admission Date: September 2023</p>
        <p>Number of Research: 50</p>
      </Box>

      <Box bg="white" shadow="md" rounded="lg" p="4" mb="4">
        <Heading as="h2" size="lg" fontWeight="semibold" mb="2">
          Add Review
        </Heading>
        <form onSubmit={handleSubmit(handleReviewSubmit)}>
          <FormControl>
            <FormLabel>Rating</FormLabel>
            <Controller
              render={({ field }) => (
                <Input {...field} type="number" min={0} max={5} />
              )}
              control={control}
              name="rating"
              defaultValue={0}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Comment</FormLabel>
            <Controller
              render={({ field }) => <Input {...field} type="text" />}
              control={control}
              name="comment"
              defaultValue=""
            />
          </FormControl>
          <Button colorScheme="blue" size="lg" mt="4" type="submit">
            Submit Review
          </Button>
        </form>
      </Box>

      <Box bg="white" shadow="md" rounded="lg" p="4">
        <Heading as="h2" size="lg" fontWeight="semibold" mb="2">
          Reviews
        </Heading>
        {reviewsList.map((review, index) => (
          <Box key={index} bg="gray.100" p="2" mb="2">
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </Box>
        ))}
        {reviewsList.length === 0 && <p>No reviews yet.</p>}
      </Box>
    </Box>
  );
};

export default MyCollege;
