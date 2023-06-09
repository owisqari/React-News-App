import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
const NewsSec = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let token;
  const data = localStorage.getItem("user");
  if (data) {
    const user = data ? JSON.parse(data) : null;
    token = user.token;
    console.log(token);
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

  const getNews = async () => {
    setIsLoading(true);
    const url =
      "https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=10";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fffd559ce7msh64ef6fcb382e2a2p1b682ejsn21e409321a98",
        "X-RapidAPI-Host": "cnbc.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setNews(data.data.mostPopularEntries.assets);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      {token ? (
        <Flex
          direction={{ base: "column", md: "column" }}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          {isLoading && <div>Loading...</div>}{" "}
          {news.map((item: Iitem) => {
            return (
              <Box mt={"20px"}>
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
