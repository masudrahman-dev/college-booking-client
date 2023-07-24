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

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({});

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    // Implement login logic using your authentication service (e.g., Firebase)
    console.log("Login Data:", data);
  };

  return (
    <div className=" mt-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack
          className="border p-5 rounded-lg shadow-lg  "
          spacing={7}
          maxW="450px"
          mx="auto"
        >
          <FormControl isInvalid={!!errors.email} w="100%">
            <FormLabel>Email</FormLabel>
            <Input type="email" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password} w="100%">
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register("password")} />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Flex justify="center" w="100%">
            <Button type="submit" isLoading={isSubmitting} colorScheme="blue">
              Login
            </Button>
          </Flex>
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
            <span>If have not account then | <Link to={'/register'} className="underline" >Register</Link> </span>
          </Flex>
        </VStack>
      </form>
    </div>
  );
};

export default Login;
