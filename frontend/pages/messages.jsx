import { Button } from "@chakra-ui/react";
import Page from "../components/Page";
import { createListing } from "../lib/api";

const Messages = () => {
  return (
    <Page title="Messages">
      <Button
        onClick={() =>
          createListing({ title: "Test Listing", starting_price: 5 })
        }
      ></Button>
    </Page>
  );
};

export default Messages;
