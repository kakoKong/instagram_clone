import { Avatar, Flex, Text, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = ({ username, followers }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Flex alignItems={"flex-start"} gap={2}>
        <Avatar size={"md"} name={username} src="/me.png" />
        <Box>
          <Text fontSize={14} fontWeight={"bold"}>
            {username}
          </Text>
          <Text fontSize={12} color={"gray.500"}>
            {followers} Followers
          </Text>
        </Box>
      </Flex>
      <Button
        fontSize={13}
        fontWeight={"medium"}
        color={"blue.500"}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        _hover={{
          color: "white",
        }}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
