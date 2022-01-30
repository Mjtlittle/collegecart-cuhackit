import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { APIProvider } from "../lib/api_provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <APIProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </APIProvider>
  );
}

export default MyApp;
