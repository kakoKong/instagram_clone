import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import { VStack, Text, Flex, Box } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested For You
        </Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.500" }} cursor={"pointer"}>
          See All
        </Text>
      </Flex>
      <SuggestedUser username={"Kong"} followers={200} />
      <SuggestedUser username={"Jong"} followers={300} />
      <SuggestedUser username={"Mong"} followers={400} />
      <SuggestedUser username={"Hong"} followers={500} />

      <Box fontSize={12} color={"gray.500"} mt={5}>
        2023 built by Kong
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
