import { VStack, Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import PageHeader from "./PageHeader";

const Page = ({ title, children }) => {
  return (
    <>
      <VStack>
        <PageHeader title={title} />
        {children}
        <Box height="6rem" />
      </VStack>
      <Navbar></Navbar>
    </>
  );
};

export default Page;
