import { Box, HStack, Button, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaStoreAlt, FaRegCommentAlt, FaRegUser } from "react-icons/fa";

const NavButton = ({ icon, label, href }) => {
  const ButtonIcon = icon;
  return (
    <NextLink href={href}>
      <Button variant="ghost" width="25%" height="4rem">
        <VStack spacing="1">
          <ButtonIcon size="1rem" />
          <span>{label}</span>
        </VStack>
      </Button>
    </NextLink>
  );
};

const tabs = [
  { icon: FaStoreAlt, label: "Market", href: "/market" },
  { icon: FaRegUser, label: "Profile", href: "/profile" },
  { icon: FaRegCommentAlt, label: "Messages", href: "/messages" },
];

const Navbar = () => {
  return (
    <HStack
      width="100%"
      height="5rem"
      align="center"
      justify="space-around"
      position="fixed"
      backdropBlur={50}
      backgroundColor="#ffffffee"
      bottom={0}
    >
      {tabs.map((props, i) => (
        <NavButton key={i} {...props}></NavButton>
      ))}
    </HStack>
  );
};

export default Navbar;
