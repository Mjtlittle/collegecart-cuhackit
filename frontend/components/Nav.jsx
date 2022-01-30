import { Box, Link, Button, Container, Flex, Spacer, Img, Image, HStack } from "@chakra-ui/react";
import NextLink from 'next/link'

const Nav = () => {
  return (
    <Container h="10vh" maxW="container.xl">
      <HStack alignItems={'center'} justifyContent={'space-around'}>
        <NextLink href='/home' passHref>
          <Link>
            <Box w='48vw' h='50px' bg='lightblue'>
              <Image src="/images/logo.svg" alt="Home"/>
            </Box>
          </Link>
        </NextLink>
        <NextLink href='/post' passHref>
          <Link>
            <Box w='48vw' h='50px' bg='lightblue'>
              <Image src="/images/plus2.png" alt="Home" w={'40px'} margin={'0 auto'} py={1.5}/>
            </Box>
          </Link>
        </NextLink>
      </HStack>
    </Container>
  );
};

export {Nav};
