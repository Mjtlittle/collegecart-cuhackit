import { Button, Container,Flex, Spacer, Img, Image, Box, Badge, Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import React from "react";
import { Nav } from '../components/Nav'

const Post = () => {

  return (
    <>
      <Container h="90vh" maxW="container.xl" p={6} backgroundColor='orange.400'>
        <Flex py={0} fontSize='30px' fontWeight='bold'>New Post</Flex>
        <FormControl isRequired>
          <FormLabel htmlFor='photo' fontWeight='semibold'>Upload Media</FormLabel>
          <Input type='file'/>
          <FormLabel htmlFor='title' fontWeight='semibold'>Title</FormLabel>
          <Input id='title' placeholder='Title' color='white'/>
 
          <FormLabel htmlFor='description' fontWeight='semibold'>Description</FormLabel>
          <Textarea placeholder="Type your description here"/>
          <FormLabel htmlFor='price' fontWeight='semibold'>Price</FormLabel>
          <NumberInput min={0.01}>
          <NumberInputField id='price' />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button width='full' mt={4} type='submit'>Post</Button>
      </Container>
      <Nav/>
    </>
  );
};

export {Post};
