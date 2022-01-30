import { HStack, Box, VStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import Page from "../components/Page";
import { APIContext } from "../lib/api_provider";

const Profile = () => {
  const { user } = useContext(APIContext);

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
      </VStack>
    </Page>
  );
};

export default Profile;
