import { Box, Center, Flex, Input } from "@chakra-ui/react";
import { Login } from "../Button";
import { Alert } from "../../services/alert";
import { useState } from "react";
import { Header } from "../Header";

export const Card = () => {
  const [email, setEmail] = useState("");

  return (
    <Flex
      margin="auto"
      width="100vw"
      height="100vh"
      backgroundColor="#9413dc"
      align="center"
      flexDirection="column"
    >
      <Header title="APP LOGIN"/>
      <Box
        backgroundColor="#ffffff"
        borderRadius="25px"
        padding="25px"
        maxWidth="400px"
        height="fit-content"
        marginTop="40px"
      >
        <Center>
          <h1>Credenciais</h1>
        </Center>
        <Input
          placeholder="email"
          marginBottom="20px"
          marginTop="15px"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="password"
          type="password"
          marginBottom="20px"
        ></Input>
        <Center>
          <Login
            name="Login"
            onClick={() => Alert(`Seja bem vindo(a) ${email}`)}
          />
        </Center>
      </Box>
    </Flex>
  );
};
