import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

const Conta = () => {
  const { userData } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    !isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  if (userData && id !== userData.id) {
    navigate("/");
  }

  const actualData = new Date();

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainText={`Bem vindo ${userData?.name}`}
              content={`${actualData.getDate()} / ${
                actualData.getMonth() + 1
              } / ${actualData.getFullYear()} / ${actualData.getHours()} : ${actualData.getMinutes()}`}
            />
            <CardInfo
              mainText={`Seu saldo é:`}
              content={`R$ ${userData.balance}`}
            />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
