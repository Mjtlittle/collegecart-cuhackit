import { Button, Container,Flex, Spacer, Img, Image } from "@chakra-ui/react";
import React from "react";
import logo from '/images/logo.svg';

const Splash = () => {
  return (
    <Container h="100vh" maxW="container.xl" p={6} backgroundColor={"orange.300"}>
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
