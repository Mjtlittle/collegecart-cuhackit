import { Box, Link, Text, Button, Container, Flex, Spacer, Img, Image, HStack } from "@chakra-ui/react";
import NextLink from 'next/link'

const Nav = () => {
  return (
    <Container h="10vh" maxW="container.xl">
      <HStack alignItems={'center'} justifyContent={'space-around'}>
        <NextLink href='/home' passHref>
          <Link>
            <Box w='48vw' h='50px' bg='lightblue'>
              <Image src="/images/logo.svg" alt="Home" maxH={'10vh'}/>
            </Box>
          </Link>
        </NextLink>
        <NextLink href='/post' passHref>
          <Link>
            <Box w='48vw' h='50px' bg='lightblue'>
            <HStack alignItems={'center'} justifyContent={'space-around'}> 
              <Text color='white'>Create Post</Text>
              <Image src="/images/plus.png" alt="Home" w={'40px'} margin={'0 auto'} py={1.5} p={2} alignItems={'center'} justifyContent={'space-around'}/>
            </HStack>
            </Box>
          </Link>
        </NextLink>
      </HStack>
    </Container>
  );
};

export {Nav};
