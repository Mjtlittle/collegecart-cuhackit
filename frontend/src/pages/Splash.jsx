import { Button, Container,Flex, Spacer, Img, Image, Box, keyframes } from "@chakra-ui/react";
import React from "react";
import logo from '/images/logo.svg';

/*const pan = keyframes`
  from { transform: translate(0,0); }
  to { transform: translate(-150px, 0); }
`*/

const Splash = () => {
 //const moveAnimation = `${pan} infinite 5s linear`;
  return (
    <Container h="100vh" maxW="container.xl" p={6} backgroundImage="url('public/images/cc_splash.jpg')"  backgroundPosition="left" backgroundRepeat="no-repeat" backgroundSize="cover">
      <Image py={100} src={logo} alt='College Cart'/>
      <Flex py={0}>
        <Spacer/>
          <Button>Login with Google SSO</Button>
        <Spacer/>
      </Flex>
    </Container>
  );
};

export default Splash;
