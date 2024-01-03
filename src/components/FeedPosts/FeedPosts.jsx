import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import { Container, Skeleton, SkeletonCircle, VStack, Flex, Box } from "@chakra-ui/react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w="200px" />
                <Skeleton height="10px" w="200px" />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>Contents Wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost username="Kong_Nop" img="/img1.png" avatar="/img1.png" />
          <FeedPost username="Kong_kako" img="/img2.png" avatar="/img2.png" />
          <FeedPost username="Kay_Kong" img="/img3.png" avatar="/img3.png" />
          <FeedPost username="King_Kong" img="/img4.png" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
