import { GridItem, Badge, Image, Box, LinkOverlay } from "@chakra-ui/react";

const MarketItem = ({ listing }) => {
  // const listing = {
  //   //imageUrl: 'https://bit.ly/2Z4KKcF',
  //   imageAlt: "TV for Sale",
  //   price: "$180",
  //   //baths: 2,
  //   title: '60" TV',
  //   description: "Roku included",
  //   seller: "@gotigers123",
  //   rating: 4,
  // };
  return (
    <GridItem maxW="20rem">
      <LinkOverlay href="#">
        <Badge
          borderRadius="full"
          py="1"
          px="2"
          m="4px"
          position="absolute"
          colorScheme="green"
        >
          ${listing.starting_price}
        </Badge>
        <Image
          src="/images/listing1ex.png"
          borderRadius={4}
          alt={listing.imageAlt}
        />

        <Box px={1}>
          {/* <Box display='flex'> */}

          {/* </Box> */}

          <Box
            my={-1}
            maxW="8em"
            mt="1"
            fontWeight="semibold"
            as="h5"
            lineHeight="tight"
            isTruncated
          >
            {listing.title}
          </Box>

          <Box my={-1}>
            {listing.description}
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>

          {/* <Box as='span' ml='2' color='gray.600' fontSize='sm'>
        {listing.seller} 
      </Box> */}
        </Box>
      </LinkOverlay>
    </GridItem>
  );
};

export default MarketItem;
