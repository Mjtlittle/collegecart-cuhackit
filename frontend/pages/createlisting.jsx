import { useState } from "react";
import { useRouter } from "next/router";
import Page from "../components/Page";
import {
  Flex,
  FormControl,
  Input,
  Textarea,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { createListing } from "../lib/api";

const CreateListing = () => {
  const router = useRouter();
  const toast = useToast();

  const [title, setTitle] = useState("");
  const handleTitle = (event) => setTitle(event.target.value);

  const [description, setDescription] = useState("");
  const handleDescription = (event) => setDescription(event.target.value);

  const [price, setPrice] = useState(0);
  const handlePrice = (event) => setPrice(event.target.value);

  const post_listing = async () => {
    return await createListing({
      title: title == "" ? null : title,
      description,
      starting_price: price,
    }).then((res) => {
      toast({
        title: "Your listing was posted!",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.replace("/market");
    });
  };

  return (
    <Page title="Create Listing">
      <FormControl isRequired mb="1rem">
        {/* <FormLabel htmlFor="photo" fontWeight="semibold">
          Upload Media
        </FormLabel>
        <Input type="file" /> */}
        <FormLabel htmlFor="title" fontWeight="semibold">
          Title
        </FormLabel>
        <Input
          value={title}
          onChange={handleTitle}
          id="title"
          placeholder="Title"
          mb="1rem"
        />

        <FormLabel htmlFor="description" fontWeight="semibold">
          Description
        </FormLabel>
        <Textarea
          value={description}
          onChange={handleDescription}
          placeholder="Type your description here"
          mb="1rem"
        />

        <FormLabel htmlFor="price" fontWeight="semibold">
          Price
        </FormLabel>
        <NumberInput min={0.01}>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          />
          <NumberInputField
            value={price}
            onChange={handlePrice}
            pl="2rem"
            id="price"
            placeholder="Enter the listing price"
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <Button onClick={post_listing} width="full" mt={4} type="submit">
        Post
      </Button>
    </Page>
  );
};

export default CreateListing;
