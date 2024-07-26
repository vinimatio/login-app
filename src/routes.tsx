import { Routes, Route } from "react-router-dom";
import Conta from "./pages/Conta";
import { Home } from "./pages/Home";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";
import Info from "./pages/Info";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path="/info/:id" element={isLoggedIn ? <Info /> : <Home />} />
    </Routes>
  );
};
export default MainRoutes;
