import { Button, Box, VStack, Text } from "@chakra-ui/react";
import { endpoint } from "../lib/api";
import NextLink from "next/link";

import { FcGoogle } from "react-icons/fc";
import { HiShoppingCart } from "react-icons/hi";

const Splash = () => {
  const logo = (
    <VStack
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      justify="center"
      align="center"
    >
      {/* <Image width="100%" src="/images/logo.svg" alt="College Cart" /> */}
      <HiShoppingCart color="white" size="7rem" />
      <Text color="white" fontSize="4rem" fontWeight="bold" textShadow="xl">
        CollegeCart
      </Text>
      <Text color="white" fontSize="lg" fontWeight="bold" textShadow="sm">
        The Marketplace for Students
      </Text>
      <Box height="3rem"></Box>
      <NextLink href={`${endpoint}/auth/google`}>
        <Button bg="white" leftIcon={<FcGoogle />} width="50%">
          Login with Google
        </Button>
      </NextLink>
    </VStack>
  );

  return (
    <Box
      h="100vh"
      maxW="container.xl"
      p={6}
      backgroundImage="url('/images/cc_splash.jpg')"
      backgroundPosition="35% 50%"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
    >
      <Box
        position="absolute"
        // bgGradient="linear(to-r, black.300, black)"
        bg="black"
        left={0}
        top={0}
        width="full"
        height="full"
        backdropFilter="blur(10px)"
        opacity="40%"
        // mixBlendMode="overlay"
      >
        a
      </Box>
      {logo}
    </Box>
  );
};

export default Splash;
