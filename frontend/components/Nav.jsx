import { Link, Button, Container, Flex, Spacer, Img, Image, HStack } from "@chakra-ui/react";
import NextLink from 'next/link'

const Nav = () => {
  return (
    <Container h="10vh" maxW="container.xl" p={2}>
      {/* <Flex h={16} alignItems={'center'} justifyContent={'space-around'}> */}
      <HStack spacing='24px'>
        <NextLink href='/home' passHref>
          <Link>Home</Link>
        </NextLink>
        <Spacer/>
        <NextLink href='/post' passHref>
          <Link>Post</Link>
        </NextLink>
      </HStack>
    </Container>
  );
};

export {Nav};
