import Splash from "./pages/Splash";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    // <ChakraProvider theme={theme}>
    <ChakraProvider>
      <Splash></Splash>
    </ChakraProvider>
  );
}

export default App;
