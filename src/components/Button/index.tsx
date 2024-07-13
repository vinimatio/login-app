import { IButton } from "./types";
import { Button } from "@chakra-ui/react";

export const Login = ({ name, onClick }: IButton) => (
  <Button colorScheme="teal" size="md" onClick={onClick}>
    {name}
  </Button>
);
