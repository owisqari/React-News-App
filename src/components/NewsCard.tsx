import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface INewsCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
  author: string;
  date: string;
  tag: string;
}
const NewsCard = (props: INewsCardProps) => {
  return (
    <>
      <Stack h={"25vh"} mt={"20"} direction={{ base: "column", md: "row" }}>
        <Flex
          direction={{ base: "column", md: "column", sm: "column" }}
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                color={"blue.400"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {props.tag}
              </Text>
              <Text
                as={"span"}
                position={"relative"}
                fontSize={"20px"}
                _after={{
                  content: "''",
                  width: "full",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
              >
                {props.title}
              </Text>
              <br />{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              {props.description}
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                as={"a"}
                href={props.url}
                _hover={{
                  bg: "blue.500",
                }}
              >
                More
              </Button>
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{props.author}</Text>
                <Text color={"gray.500"}>{props.date}</Text>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={" Image"}
            objectFit={"cover"}
            w={"32rem"}
            h={"16rem"}
            src={props.image}
          />
        </Flex>
      </Stack>
    </>
  );
};

export default NewsCard;
