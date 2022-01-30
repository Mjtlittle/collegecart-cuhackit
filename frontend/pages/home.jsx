import { Button, Container, Flex, Spacer, Img, Image } from "@chakra-ui/react";
import { Nav } from '../components/Nav'
import { Listing } from '../components/Listing'

const Home = () => {
  return (
    <>
      <Nav/>
      <Container h="90vh" maxW="container.xl" px={6} py={2}>
        <Flex py={0}>
          This is Home
        </Flex>
        <Listing/>
      </Container>
    </>
  );
};

export default Home;
