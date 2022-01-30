import { Button, Box, Title, Text, Image, Spacer, HStack, VStack } from "@chakra-ui/react";
import Page from "../components/Page";
import MessagePreview from "../components/MessagePreview";
import TigerAvi from '../public/images/tiger-avi.jpeg'
import { createListing } from "../lib/api";

const Messages = () => {
  return (
    <Page title="Messages">
      <MessagePreview name={'Dan Abramov'} message={'Hey! Let me buy your website!'} img={'https://bit.ly/dan-abramov'}/>
      <MessagePreview name={'The Tiger'} message={'How much for a ticket?'} img={'https://clemsontigers.com/wp-content/uploads/2012/11/VWJLTFZZOEFUNKU.20121102201434.jpg'}/>
    </Page>
  );
};

export default Messages;
