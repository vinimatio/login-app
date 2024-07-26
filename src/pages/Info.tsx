import { Center, SimpleGrid } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

const Info = () => {
  const { userData } = useContext(AppContext);

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo mainText="Usuário:" content={userData?.name}></CardInfo>
        <CardInfo mainText="Email:" content={userData?.email}></CardInfo>
      </SimpleGrid>
    </Center>
  );
};

export default Info;
