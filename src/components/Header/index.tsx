import { Flex, Heading } from "@chakra-ui/react";
import { IHeaderProps } from "./types";

export const Header = ({ title }: IHeaderProps) => {
  return (
    <Flex
      align="center"
      justify="center"
      backgroundColor="#000000"
      width="100%"
      height="100px"
    >
      <Heading size="lg" fontSize="50px" color="#ffffff">
        {title}
      </Heading>
    </Flex>
  );
};
