import { Flex, Box, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
import React from "react";

export const ProfileTab = () => {
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ base: 4, sm: 10 }}
        w={"full"}
        textTransform={"uppercase"}
        fontWeight={"bold"}
      >
        <Flex borderTop={"1px solid white"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
          <Box fontSize={20}>
            <BsGrid3X3 />
          </Box>
          <Text fontSize={12} display={{ base: "none", sm: "block" }}>
            Post
          </Text>
        </Flex>
        <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
          <Box fontSize={20}>
            <BsBookmark />
          </Box>
          <Text fontSize={12} display={{ base: "none", sm: "block" }}>
            Saved
          </Text>
        </Flex>
        <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
          <Box fontSize={20}>
            <BsSuitHeart />
          </Box>
          <Text fontSize={12} display={{ base: "none", sm: "block" }}>
            Likes
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
