import { Button, Container, Flex, Spacer, Img, Image } from "@chakra-ui/react";
import { Nav } from '../components/Nav'
const Home = () => {
  return (
    <>
      <Container h="90vh" maxW="container.xl" p={6}>
        <Flex py={0}>
          This is Home
        </Flex>
      </Container>
      <Nav/>
    </>
  );
};

export default Home;
