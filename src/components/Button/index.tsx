import { IButton } from "./types";
import { Button } from "@chakra-ui/react";

export const ButtonSend = ({ name, onClick }: IButton) => (
  <Button colorScheme="teal" size="md" onClick={onClick}>
    {name}
  </Button>
);
