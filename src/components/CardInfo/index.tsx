import { Box, Text } from "@chakra-ui/react";
import { ICardInfo } from "./types";

const CardInfo = ({ mainText, content }: ICardInfo) => {
  return (
    <Box
      backgroundColor="white"
      minHeight="120px"
      padding={8}
      borderRadius={25}
    >
      <Text fontSize='2xl' fontWeight="bold">{mainText}</Text>
      <Text fontSize='xl'>{content}</Text>
    </Box>
  );
};

export default CardInfo;
