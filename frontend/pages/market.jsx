import MarketItem from "../components/MarketItem";
import Page from "../components/Page";
import { Grid } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { APIContext } from "../lib/api_provider";

const Market = () => {
  const { listings, refreshListings } = useContext(APIContext);
  useEffect(() => {
    refreshListings();
  }, []);

  return (
    <Page title="Marketplace">
      <Grid templateColumns="repeat(2, 1fr)" px="1rem" gap={6}>
        {listings.map((listing) => {
          return <MarketItem listing={listing}></MarketItem>;
        })}
      </Grid>
    </Page>
  );
};

export default Market;
