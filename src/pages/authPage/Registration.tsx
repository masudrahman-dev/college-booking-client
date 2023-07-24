// src/components/Registration.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface RegistrationFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const Registration: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormValues>();

  const onSubmit: SubmitHandler<RegistrationFormValues> = async (data) => {
    // Implement registration logic using your authentication service (e.g., Firebase)
    console.log("Registration Data:", data);
  };

  return (
    <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
      <VStack
        spacing={7}
        maxW={"450px"}
        mx={"auto"}
        className="border p-5 rounded-lg shadow-lg  "
      >
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register("email")} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password")} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.confirmPassword}>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" {...register("confirmPassword")} />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" isLoading={isSubmitting} colorScheme="blue">
          Register
        </Button>
        <Divider />
        <Flex gap={5} justify="center" w="100%">
          <Button type="submit" isLoading={isSubmitting} colorScheme="blue">
            Google
          </Button>
          <Button type="submit" isLoading={isSubmitting} colorScheme="blue">
            Facebook
          </Button>
        </Flex>
        <Divider />
        <Flex gap={5} justify="center" w="100%">
          <span>
            Already have account then | 
            <Link to={"/login"} className="underline pl-1">
              Login
            </Link>
          </span>
        </Flex>
      </VStack>
    </form>
  );
};

export default Registration;
