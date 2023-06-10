import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  let token;
  const data = localStorage.getItem("user");
  if (data) {
    const user = data ? JSON.parse(data) : null;
    token = user.token;
    // console.log(token);
  } else {
    token = false;
  }
  const refreshPage = () => {
    window.location.reload();
  };
  // localStorage.removeItem("user");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
        >
          <HStack spacing={7} direction={"row"}>
            <Box>
              <Image
                boxSize="50px"
                borderRadius="15px"
                objectFit="cover"
                w={{ base: "full", md: "auto", lg: "auto" }}
                src="https://play-lh.googleusercontent.com/feYrTePrOqfAt7B_QZVThMUpSng_44VHF80xVnB_nDJM0Vz__HakW8CGs2aS0UnQ9ts=s180"
                alt="blog logo"
              />
            </Box>
            <Text fontSize="lg" fontWeight="bold" as={"a"} href="/">
              NewsBreak
            </Text>
          </HStack>
          <HStack spacing={7} direction={"row"}>
            {token ? (
              <Button
                onClick={() => {
                  localStorage.removeItem("user");
                  refreshPage();
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
