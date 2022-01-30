import { Button, Container,Flex, Spacer, Img, Image, Box, Badge } from "@chakra-ui/react";
import React from "react";
import list from '../public/images/listing1ex.png';



const Listing = () => {
    const listing = {
      //imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'TV for Sale',
      price: '$180',
      //baths: 2,
      title: '60" TV',
      description: 'Roku included',
      seller: '@gotigers123',
      rating: 4,
    }
  
    return (
      <Container maxW='10em' objectFit='cover'>
        <Badge
              borderRadius='full' p='.5' 
              m="4px"
              position='absolute'
              colorScheme='orange'>
              {listing.price}
            </Badge>
        <Image src='/images/listing1ex.png' alt={listing.imageAlt} />
        
  
        <Box px={1}>
          {/* <Box display='flex'> */}
            
          {/* </Box> */}
  
          <Box
            my={-1}
            maxW="8em"
            mt='1'
            fontWeight='semibold'
            as='h5'
            lineHeight='tight'
            isTruncated
          >
            {listing.title}
          </Box>
  
          <Box my={-1}>
            {listing.description}
            <Box as='span' color='gray.600'
            fontSize='sm'>
            </Box>
          </Box>
  
            {/* <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {listing.seller} 
            </Box> */}
         
        </Box>
      </Container>
    );
  };
export {Listing};