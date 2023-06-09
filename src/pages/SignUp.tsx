import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    token: false,
  });

  const HundleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (user.username === "" || user.email === "" || user.password === "") {
      alert("Please fill all the fields");
    } else if (user.password.length < 4) {
      alert("Password must be at least 4 characters");
    } else if (!user.email.includes("@") || !user.email.includes(".")) {
      alert("Please enter a valid email address");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
    }
  };
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      navigate("/");
    } else {
      localStorage.removeItem("user");
      navigate("/signup");
    }
  }, [navigate]);

  return (
    <>
      <NavBar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} w={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up to your account
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <FormControl id="firstName" isRequired>
                  <FormLabel>username</FormLabel>
                  <Input
                    type="text"
                    name="username"
                    onChange={(e) => {
                      setUser({ ...user, username: e.target.value });
                    }}
                  />
                </FormControl>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  onClick={HundleSignUp}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} href="/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default SignUp;
