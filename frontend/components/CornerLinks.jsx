import { Box, HStack, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { FaShoppingCart, FaCog } from "react-icons/fa";

const pages = [
  { icon: FaShoppingCart, href: "/" },
  { icon: FaCog, href: "/" },
];

const IconButton = ({ icon }) => {
  const PageIcon = icon;
  return (
    <NextLink href="/">
      <Button width="3rem" height="3rem" borderRadius="1000">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <PageIcon size="1.5rem"></PageIcon>
        </Box>
      </Button>
    </NextLink>
  );
};

const CornerLinks = () => {
  return (
    <HStack>
      {pages.map(({ icon, href }) => {
        return <IconButton icon={icon} href={href}></IconButton>;
      })}
    </HStack>
  );
};

export default CornerLinks;
