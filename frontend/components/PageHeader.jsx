import { Box, HStack, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { FaShoppingCart, FaCog } from "react-icons/fa";
import CornerLinks from "./CornerLinks";

const PageHeader = ({ title }) => {
  return (
    <HStack width="100%" padding="1rem" justify="space-between">
      <Text fontSize="3xl" fontWeight="bolder">
        {title}
      </Text>
      <CornerLinks />
    </HStack>
  );
};

export default PageHeader;
