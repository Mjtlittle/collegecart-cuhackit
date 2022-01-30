import { Box, HStack, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { FaShoppingCart, FaCog } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const pages = [
  { icon: AiOutlinePlus, href: "/createlisting" },
  { icon: FaShoppingCart, href: "/" },
  { icon: FaCog, href: "/" },
];

const IconButton = ({ icon, href }) => {
  const PageIcon = icon;
  return (
    <NextLink href={href}>
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
      {pages.map((props) => {
        return <IconButton {...props}></IconButton>;
      })}
    </HStack>
  );
};

export default CornerLinks;
