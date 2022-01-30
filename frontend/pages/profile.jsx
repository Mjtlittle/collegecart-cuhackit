import { HStack, Box, VStack, Text, Button } from "@chakra-ui/react";
import { useContext } from "react";
import Page from "../components/Page";
import { APIContext } from "../lib/api_provider";

import { FiEdit } from "react-icons/fi";

const Profile = () => {
  const { user } = useContext(APIContext);

  const new_listing_button = (
    <Button leftIcon={<FiEdit />} colorScheme="blue">
      Create New Listing
    </Button>
  );

  return (
    <Page title="Profile">
      <VStack>
        <Box
          bg="gray.400"
          borderRadius="1000"
          width="10rem"
          height="10rem"
          my="2rem"
        ></Box>
        <VStack>
          <Text fontSize="2xl" fontWeight="bold">
            {user?.name}
          </Text>
          <Text fontSize="xl" fontWeight="light">
            {user?.email}
          </Text>
        </VStack>
        {new_listing_button}
      </VStack>
    </Page>
  );
};

export default Profile;
