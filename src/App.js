import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Contrato } from "./pages/contrato";
import { Perfil } from "./pages/perfil";
import { MeusAnimais } from "./pages/meus-animais";
import { Doar } from "./pages/doar";
import { Adotar } from "./pages/adotar";
import { Login } from "./pages/login";
import { LogoOutline } from "./styles";

const App = () => {
  return (
    <Router>
      <>
        <nav>
          <NavMenu to="/">Home</NavMenu>
          <NavMenu to="/sobre">Sobre</NavMenu>
          <NavMenu to="/contrato">Contrato</NavMenu>
          <NavMenu to="/perfil">Perfil</NavMenu>
          <NavMenu to="/meus-animais">Meus animais</NavMenu>
          <NavMenu to="/doar">Doar</NavMenu>
          <NavMenu to="/adotar">Adotar</NavMenu>
          <NavMenu to="/login">Login</NavMenu>
          <NavMenu to="/">
            <LogoOutline
              className="logo"
              src="/images/logo-outline.svg"
              alt="logo"
            />
          </NavMenu>
        </nav>

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contrato" element={<Contrato />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/meus-animais" element={<MeusAnimais />} />
          <Route path="/doar" element={<Doar />} />
          <Route path="/adotar" element={<Adotar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
