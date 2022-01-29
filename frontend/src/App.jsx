import Example from "./components/Example";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Example></Example>
    </ChakraProvider>
  );
}

export default App;
