import { Box, HStack, Button, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaStoreAlt, FaRegCommentAlt, FaRegUser } from "react-icons/fa";

const CatButton = ({ label, href }) => {
  //const ButtonIcon = icon;
  return (
    <NextLink href={href}>
      <Button display="inline-block" p="1rem" borderRadius="1000" height="3rem">
        {/* <ButtonIcon size="1rem" /> */}
        <span>{label}</span>
      </Button>
    </NextLink>
  );
};

const tabs = [
  { label: "School", href: "/market" },
  { label: "Furniture", href: "/market" },
  { label: "Clothing", href: "/market" },
  { label: "Tools", href: "/market" },
  { label: "Sports", href: "/market" },
  { label: "Electronics", href: "/market" },
];

const Catbanner = () => {
  return (
    <Box
      width="100%"
      height="3rem"
      // overflow="scroll"
      overflowX="scroll"
      my="0.5rem"
    >
      <HStack
        display="inline-block"
        whiteSpace="nowrap"
        align="center"
        backdropBlur={50}
        backgroundColor="#ffffffee"
        zIndex={10}
      >
        {tabs.map((props, i) => (
          <CatButton key={i} {...props}></CatButton>
        ))}
      </HStack>
    </Box>
  );
};

export default Catbanner;
