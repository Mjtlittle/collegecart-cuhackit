import { Box, HStack, Button, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaStoreAlt, FaRegCommentAlt, FaRegUser } from "react-icons/fa";

const CatButton = ({ label, href }) => {
  //const ButtonIcon = icon;
  return (
    <NextLink href={href}>
      <Button variant="ghost" width="20%" height="3rem">
          {/* <ButtonIcon size="1rem" /> */}
          <span>{label}</span>
      </Button>
    </NextLink>
  );
};

const tabs = [
  { label: "School", href: "/market" },
  { label: "Living", href: "/market" },
  { label: "Electronics", href: "/market" },
  { label: "Sports", href: "/market"},
  { label: "Clothing", href: "/market"},
];

const Catbanner = () => {
  return (
    <HStack
      width="100%"
      height="3rem"
      align="center"
      justify="space-around"
      backdropBlur={50}
      backgroundColor="#ffffffee"
      top={20}
      zIndex={10}
    >
      {tabs.map((props, i) => (
        <CatButton key={i} {...props}></CatButton>
      ))}
    </HStack>
  );
};

export default Catbanner;
