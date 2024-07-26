import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { IHeaderProps } from "./types";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { changeLocalStorage } from "../../services/storage";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = ({ title }: IHeaderProps) => {
  const { setIsLoggedIn } = useContext(AppContext);
  const { isLoggedIn } = useContext(AppContext);
  const { userData } = useContext(AppContext);

  const navigate = useNavigate();

  const logOut = () => {
    setIsLoggedIn(false);
    changeLocalStorage({ login: false });
    navigate("/");
  };

  return (
    <Flex
      align="center"
      backgroundColor="#eaa93c"
      width="100%"
      height="80px"
      padding="10px"
    >
      <Heading size="lg" fontSize="50px" color="#ffffff">
        {title}
      </Heading>
      <Spacer />

      {useLocation().pathname === `/info/${userData?.id}` &&
      isLoggedIn === true ? (
        <Button
          marginRight="10px"
          onClick={() => navigate(`/conta/${userData?.id}`)}
        >
          Conta
        </Button>
      ) : (
        isLoggedIn && (
          <Button
            marginRight="10px"
            onClick={() => navigate(`/info/${userData?.id}`)}
          >
            User Info
          </Button>
        )
      )}

      {isLoggedIn && <Button onClick={logOut}>Sair</Button>}
    </Flex>
  );
};
