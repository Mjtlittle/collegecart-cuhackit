import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getUserMe } from "../lib/api";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(async () => {
    await getUserMe().then((res) => {
      if (res.status === 401) router.replace("/");
    });
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
