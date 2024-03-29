import { Flex, Box, Text, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/const";

const PostFooter = ({username, isProfilePicture}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box my={4} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>

      {!isProfilePicture && (
        <>
          {" "}
          <Text fontWeight={600} fontSize={"sm"}>
            {username}
            <Text as="span" pl={1} fontWeight={400}>
              Feeling Good
            </Text>
          </Text>
          <Text color={"gray"} fontSize={"sm"}>
            View All 1,000 commments
          </Text>
        </>
      )}

      <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
        <InputGroup>
          <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
