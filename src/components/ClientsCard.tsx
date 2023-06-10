import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  name,
  title,
}: {
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const ClientsCard = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} mb={"10rem"}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                I've been using NewsBreak for years, and I've always been
                impressed with the quality of the content. The journalists are
                top-notch, and the website is always up-to-date with the latest
                news. I highly recommend this website to anyone who wants to
                stay informed.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar name={"Owis Bukhari"} title={"CEO"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                I'm a big fan of NewsBreak. I love the fact that they cover a
                wide range of topics, and that they always do their due
                diligence to get the facts straight. I also appreciate the fact
                that they offer a variety of perspectives on the news, so that I
                can get a well-rounded view of what's happening in the world.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar name={"Ahmed Yosef"} title={"NewsBreak User"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                I love reading the news on NewsBreak. The articles are always
                well-written and informative, and I always feel like I'm getting
                the full story. I would definitely recommend this website to
                anyone who wants to stay up-to-date on the latest news."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              name={"Fisal Abdulaziz"}
              title={"NewsBreak User"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};

export default ClientsCard;
