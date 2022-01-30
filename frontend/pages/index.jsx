import {
  Button,
  Container,
  Flex,
  Spacer,
  Img,
  Image,
  Box,
  keyframes,
  Link,
  ReachLink,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Nav } from "../components/Nav";
import { Listing } from "../components/Listing";
import { Post } from "../pages/post";
import { endpoint } from "../lib/api";
import NextLink from "next/link";
/*const pan = keyframes`
  from { transform: translate(0,0); }
  to { transform: translate(-150px, 0); }
`*/

const Splash = () => {
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
        <NextLink href={`${endpoint}/auth/google`}>
          <Button>Login with Google SSO</Button>
        </NextLink>
        <Spacer />
      </Flex>
      {/* <Listing/> */}
      {/* <Nav/> */}
      {/* <Post/> */}
    </Container>
  );
};

export default Splash;
