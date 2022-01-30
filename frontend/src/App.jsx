import Splash from "./pages/Splash";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    // <ChakraProvider theme={theme}>
    <ChakraProvider>
      <Splash></Splash>
      {/* <Home></Home> */}
    </ChakraProvider>
  );
}

export default App;
