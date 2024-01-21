import {
  Avatar,
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{
            opacity: 1,
          }}
          position={"absolute"}
          top={0}
          left={0}
          bottom={0}
          right={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={10}>
            <Flex gap={2}>
              <AiFillHeart size={30} />
              <Text fontWeight={"bold"}>7</Text>
            </Flex>
            <Flex gap={2}>
              <FaComment size={30} />
              <Text fontWeight={"bold"}>2</Text>
            </Flex>
          </Flex>
        </Flex>
        <Image src={img} alt="profile post" w={"100%"} h={"100%"} objectFit={"cover"} />
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: "3xl", md: "5xl" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"}>
              <Box borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.500"} flex={1.5}>
                <Image src={img} alt="profile" />
              </Box>
              <Flex flex={1} flexDirection={"column"} px={10} display={{ base: "none", md: "flex" }}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar src="/profilepic.png" size={"sm"} />
                    <Text fontWeight={"bold"} fontSize={12}>
                      Kong_kako
                    </Text>
                  </Flex>
                  <Box _hover={{ bg: "whiteAlpha.300", color: "red.600" }} borderRadius={4} p={1}>
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />
                <VStack w="full" alignItems={"start"} maxH={"420px"} overflow={"auto"}>
                  <Comment
                    createdAt={"1d ago"}
                    username={"NotKong555"}
                    profilePic={"/profilepic.png"}
                    text={"Looks cool tho"}
                  />
                  <Comment
                    createdAt={"2m ago"}
                    username={"Hello_bish"}
                    profilePic={"/img2.png"}
                    text={"Kinda hot ngl, why don't you follow me"}
                  />
                  <Comment
                    createdAt={"1d ago"}
                    username={"NotKong555"}
                    profilePic={"/profilepic.png"}
                    text={"Looks cool tho"}
                  />
                  <Comment
                    createdAt={"1d ago"}
                    username={"NotKong555"}
                    profilePic={"/profilepic.png"}
                    text={"Looks cool tho"}
                  />
                  <Comment
                    createdAt={"2m ago"}
                    username={"Hello_bish"}
                    profilePic={"/img2.png"}
                    text={"Kinda hot ngl, why don't you follow me"}
                  />
                  <Comment
                    createdAt={"1d ago"}
                    username={"NotKong555"}
                    profilePic={"/profilepic.png"}
                    text={"Looks cool tho"}
                  />
                  <Comment
                    createdAt={"1d ago"}
                    username={"NotKong555"}
                    profilePic={"/profilepic.png"}
                    text={"Looks cool tho"}
                  />
                  <Comment
                    createdAt={"2m ago"}
                    username={"Hello_bish"}
                    profilePic={"/img2.png"}
                    text={"Kinda hot ngl, why don't you follow me"}
                  />
                  <Comment
                    createdAt={"1d ago"}
                    username={"NotKong555"}
                    profilePic={"/profilepic.png"}
                    text={"Looks cool tho"}
                  />
                  <Comment
                    createdAt={"1d ago"}
                    username={"NotKong555"}
                    profilePic={"/profilepic.png"}
                    text={"Looks cool tho"}
                  />
                  <Comment
                    createdAt={"2m ago"}
                    username={"Hello_bish"}
                    profilePic={"/img2.png"}
                    text={"Kinda hot ngl, why don't you follow me"}
                  />
                  <Comment
                    createdAt={"1d ago"}
                    username={"NotKong555"}
                    profilePic={"/profilepic.png"}
                    text={"Looks cool tho"}
                  />
                </VStack>
                <Divider my={4} bg={"gray.500"} />
                <PostFooter isProfilePicture={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
