import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
const NewsSec = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  let token;
  const data = localStorage.getItem("user");
  if (data) {
    const user = data ? JSON.parse(data) : null;
    token = user.token;
    // console.log(token);
  } else {
    token = false;
  }

  interface Iitem {
    headline: string;
    description: string;
    url: string;
    promoImage: {
      url: string;
    };
    authorFormatted: string;
    shortDateLastPublished: string;
    section: {
      tagName: string;
    };
  }

  const getNews = async (value: string) => {
    setIsLoading(true);
    const url = import.meta.env.VITE_API_KEY;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_X_RAPIDAPI_HOST,
      },
    };
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (value === "") {
          setIsLoading(false);
          setNews(data.data.mostPopularEntries.assets);
          console.log(data.data.mostPopularEntries.assets);
          return;
        } else {
          const filteredNews = data.data.mostPopularEntries.assets.filter(
            (item: Iitem) => {
              return item.headline.toLowerCase().includes(value.toLowerCase());
            }
          );
          setIsLoading(false);
          setNews(filteredNews);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    getNews(value);
  };

  useEffect(
    () => {
      getNews("");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      {token ? (
        <Flex
          direction={{ base: "column", md: "column" }}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          {/* searc bar */}
          <InputGroup borderRadius={5} w={"68rem"} size="sm">
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="blue.400" />}
            />
            <Input
              type="text"
              placeholder="Search..."
              borderRadius={"10px"}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => handleSearch(e.target.value)}
              value={search}
            />
            <InputRightAddon p={0} border="none">
              <Button
                size="sm"
                borderLeftRadius={0}
                borderRightRadius={"10px"}
                bg={"blue.400"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Search
              </Button>
            </InputRightAddon>
          </InputGroup>
          {/* news cards */}
          {isLoading && <div>Loading...</div>}{" "}
          {news.map((item: Iitem, id) => {
            return (
              <Box mt={"20px"} key={id}>
                <NewsCard
                  title={item.headline}
                  description={item.description}
                  url={item.url}
                  image={item.promoImage.url}
                  author={item.authorFormatted}
                  date={item.shortDateLastPublished}
                  tag={item.section.tagName}
                />
              </Box>
            );
          })}
        </Flex>
      ) : (
        <Flex
          direction={{ base: "column", md: "column" }}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          mt={"20px"}
          mb={"20px"}
        >
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
              Please login to view breaking news
            </Text>
          </Heading>
        </Flex>
      )}
    </>
  );
};

export default NewsSec;
