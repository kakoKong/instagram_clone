import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} width={"full"} my={2}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar size={"sm"} name="Kong Nop" src="/me.png" />
        <Flex alignItems={"center"} gap={2} fontSize={12} fontWeight={"bold"}>
          <Text>Kong</Text>
          <Box color={"gray.500"}>
            <Text>- 1w</Text>
          </Box>
        </Flex>
      </Flex>
      <Box
        cursor={"pointer"}
      >
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color:"white"
          }}
          transition={"0.2s ease-in-out"}
        >Unfollow</Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
