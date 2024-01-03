import React from 'react'
import PostHeader from './PostHeader'
import { Box, Flex, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const FeedPost = ({username, img, avatar}) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2}>
        <Image src={img} alt="user profile pic" />
      </Box>
      <PostFooter username={username} />
    </>
  );
}

export default FeedPost