import { Box } from "@chakra-ui/react";
import { ILayout } from "./types";
import { Header } from "../Header";

export const Layout = ({ children }: ILayout) => {
  return (
    <Box minHeight="100vh" backgroundColor="#9413dc">
      <Header title="APP LOGIN" />
      {children}
    </Box>
  );
};
