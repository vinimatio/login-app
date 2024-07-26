import { Box, Center, Flex, Input, Spinner } from "@chakra-ui/react";
import { ButtonSend } from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage, getAllLocalStorage } from "../services/storage";

export const Home = ({ children }: any) => {
  const [emailForm, setEmail] = useState("");
  const [passForm, setPass] = useState("");
  const [locallogged, setLocalLogged] = useState(false);

  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  const { setIsLoggedIn } = useContext(AppContext);

  const Login = (email: string, pass: string) => {
    if (email === userData?.email && pass === userData.pass) {
      setIsLoggedIn(true);
      changeLocalStorage({ login: true });
      navigate(`/conta/${userData.id}`);
    } else {
      alert("Senha incorreta, tente novamente");
    }
  };

  const localSession = getAllLocalStorage();

  useEffect(() => {
    if (localSession) {
      const { login } = JSON.parse(localSession);
      if (login === true) {
        setLocalLogged(true);
      }
    }
  }, [localSession]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      Login(emailForm, passForm);
    }
  };

  return (
    <Flex
      margin="auto"
      width="100vw"
      height="100%"
      backgroundColor="#9413dc"
      align="center"
      flexDirection="column"
    >
      {locallogged ? (
        <Center>
          <Spinner size="xl" color="white" marginTop="20px" />
        </Center>
      ) : (
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
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={handleKeyPress}
          ></Input>
          <Center>
            <ButtonSend
              name="Login"
              onClick={() => Login(emailForm, passForm)}
            />
          </Center>
        </Box>
      )}
    </Flex>
  );
};
