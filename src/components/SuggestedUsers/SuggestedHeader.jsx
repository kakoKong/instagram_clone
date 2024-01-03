import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={4}>
        <Avatar name="Kong" size={"md"} src="/profilepic.png" />
        <Text fontSize={14} fontWeight={"bold"}>
          Kong Nop
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to="/auth"
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.500"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
