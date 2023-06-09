import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

const HeroSec = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            NewsBreak <br />
          </Heading>
          <Text color={"gray.500"}>
            NewsBreak is a news app that provides users with breaking news from
            around the world. The app features a variety of news sources,
            including local, national, and international news outlets. Users can
            also customize their newsfeed to include specific topics or
            interests.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default HeroSec;
