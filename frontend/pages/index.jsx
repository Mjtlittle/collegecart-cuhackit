import {
  Button,
  Container,
  Flex,
  Spacer,
  Img,
  Image,
  Box,
  keyframes,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Listing } from '../components/Listing';

/*const pan = keyframes`
  from { transform: translate(0,0); }
  to { transform: translate(-150px, 0); }
`*/

const index = () => {
  useEffect(async () => {
    try {
      await fetch("http://localhost:3001/users/me").then((res) => {
        res.json();
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  //const moveAnimation = `${pan} infinite 5s linear`;
  return (
    <Container
      h="100vh"
      maxW="container.xl"
      p={6}
      backgroundImage="url('/images/cc_splash.jpg')"
      backgroundPosition="35% 50%"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Image pt={50} src="/images/logo.svg" alt="College Cart" />
      <Flex pt={150}>
        <Spacer />
        <Button>Login with Google SSO</Button>
        <Spacer />
      </Flex>
      {/* <Listing/> */}
    </Container>
  );
};

export default index;
