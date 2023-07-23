import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Image,
} from '@chakra-ui/react';

interface College {
  name: string;
  image: string;
}

const colleges: College[] = [
  {
    name: 'College 1',
    image: 'college-1.jpg',
  },
  {
    name: 'College 2',
    image: 'college-2.jpg',
  },
  // Add more colleges as needed
];

interface AdmissionFormData {
  candidateName: string;
  subject: string;
  candidateEmail: string;
  candidatePhone: string;
  address: string;
  dateOfBirth: string;
  image: string;
}


const Admission: React.FC = () => {
    const [collegeDetails, setCollegeDetails] = useState<College | null>(null);
    // const history = useHistory();
    const { handleSubmit, control } = useForm<AdmissionFormData>();
  
    const handleCollegeClick = (college: College) => {
      setCollegeDetails(college);
    };
  
    const onSubmit = (data: AdmissionFormData) => {
      if (collegeDetails) {
        // Combine the college details and admission form data
        const collegeDataWithAdmission = { ...collegeDetails, ...data };
        // Handle form submission (e.g., send data to backend, etc.)
        // For this example, we'll just redirect to the "My College" route
        localStorage.setItem('collegeDataWithAdmission', JSON.stringify(collegeDataWithAdmission));
        // history.push('/mycollege');
      }
    };
  
    return (
      <Box m="4" mx="auto" maxW="600px">
        <Heading as="h1" size="xl" textAlign="center" mb="8">
          College Admission Form
        </Heading>
        {collegeDetails ? (
          <Box>
            <Image src={collegeDetails.image} alt={collegeDetails.name} objectFit="cover" mb="4" />
            <VStack spacing="4" align="stretch" as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Candidate Name</FormLabel>
                <Controller
                  render={({ field }) => <Input {...field} />}
                  control={control}
                  name="candidateName"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Subject</FormLabel>
                <Controller
                  render={({ field }) => <Input {...field} />}
                  control={control}
                  name="subject"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Candidate Email</FormLabel>
                <Controller
                  render={({ field }) => <Input {...field} />}
                  control={control}
                  name="candidateEmail"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Candidate Phone number</FormLabel>
                <Controller
                  render={({ field }) => <Input {...field} />}
                  control={control}
                  name="candidatePhone"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Controller
                  render={({ field }) => <Input {...field} />}
                  control={control}
                  name="address"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Date of Birth</FormLabel>
                <Controller
                  render={({ field }) => <Input {...field} type="date" />}
                  control={control}
                  name="dateOfBirth"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image</FormLabel>
                <Controller
                  render={({ field }) => <Input {...field} type="file" />}
                  control={control}
                  name="image"
                />
              </FormControl>
              <Button colorScheme="blue" size="lg" type="submit" mt="8">
                Submit
              </Button>
            </VStack>
          </Box>
        ) : (
          <VStack spacing="4" align="stretch">
            {colleges.map((college, index) => (
              <Box
                key={index}
                bg="white"
                shadow="md"
                rounded="lg"
                p="4"
                cursor="pointer"
                onClick={() => handleCollegeClick(college)}
              >
                <Image src={college.image} alt={college.name} objectFit="cover" mb="4" />
                <Heading as="h2" size="lg" fontWeight="semibold" mb="2">
                  {college.name}
                </Heading>
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    );
  };
  
  export default Admission;