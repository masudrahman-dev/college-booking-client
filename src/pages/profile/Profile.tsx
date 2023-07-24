// src/pages/Profile.tsx

import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react";

interface UserProfile {
  name: string;
  email: string;
  university: string;
  address: string;
}

const defaultUserProfile: UserProfile = {
  name: "John Doe",
  email: "john@example.com",
  university: "Sample University",
  address: "123 Street, City",
};

const Profile: React.FC = () => {
  const { handleSubmit, control, setValue } = useForm<UserProfile>({
    defaultValues: defaultUserProfile,
  });

  const handleSave = (data: UserProfile) => {
    // Here you can handle the saving logic (e.g., send data to backend, etc.)
    // For this example, we'll just update the form values in the state
    setValue("name", data.name);
    setValue("email", data.email);
    setValue("university", data.university);
    setValue("address", data.address);
  };

  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="text-center">
        <p>Name: "John Doe"</p>
        <p>email: "john@example.com"</p>
        <p>university: "Sample University"</p>
        <p>address: "123 Street, City"</p>
        {/* Edit */}
        <Button colorScheme="blue" size="lg" type="submit" mt="4">
          Edit
        </Button>
      </div>

      <Box m="4" mx="auto" maxW="600px">
        <Heading as="h1" size="xl" textAlign="center" mb="8">
          Profile Details
        </Heading>
        <VStack
          spacing="4"
          align="stretch"
          as="form"
          onSubmit={handleSubmit(handleSave)}
        >
          <FormControl>
            <FormLabel>Profile Name</FormLabel>
            <Controller
              render={({ field }) => <Input {...field} isReadOnly />}
              control={control}
              name="name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Controller
              render={({ field }) => <Input {...field} isReadOnly />}
              control={control}
              name="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>University</FormLabel>
            <Controller
              render={({ field }) => <Input {...field} isReadOnly />}
              control={control}
              name="university"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Controller
              render={({ field }) => <Input {...field} isReadOnly />}
              control={control}
              name="address"
            />
          </FormControl>
          <Button colorScheme="blue" size="lg" type="submit" mt="4">
            Save
          </Button>
        </VStack>
      </Box>
    </div>
  );
};

export default Profile;
