import { Button, Box, Title, Text, Image, Spacer, HStack, VStack } from "@chakra-ui/react";
import Page from "../components/Page";
// import TigerAvi from '../public/images/tiger-avi.jpeg'
import { createListing } from "../lib/api";

const MessagePreview = (props) => {
  return (
      <Box bg={"gray.50"} w={"90vw"} borderRadius={'5px'}>
        <HStack spacing={'5px'}>
          <Image
            borderRadius='full'
            boxSize='50px'
            src={props.img}
            alt='Dan Abramov'
            p={1}
          />
          <VStack>
            <Text fontWeight={'bold'}>{props.name}</Text>
            <Text>{props.message}</Text>
          </VStack>
        </HStack>
      </Box>
  );
};

export default MessagePreview;
