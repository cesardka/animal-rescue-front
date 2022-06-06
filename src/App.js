import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Contrato } from "./pages/contrato";
import { MeusAnimais } from "./pages/meus-animais";
import { Perfil } from "./pages/perfil";
import { Doar } from "./pages/doar";

const Home = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <NavMenu to="/">Home</NavMenu>
          </li>
          <li>
            <NavMenu to="/sobre">Sobre</NavMenu>
          </li>
          <li>
            <NavMenu to="/contrato">Contrato</NavMenu>
          </li>
          <li>
            <NavMenu to="/perfil">Perfil</NavMenu>
          </li>
          <li>
            <NavMenu to="/meus-animais">Meus animais</NavMenu>
          </li>
          <li>
            <NavMenu to="/doar">Doar</NavMenu>
          </li>
          <li>
            <NavMenu to="/adotar">Adotar</NavMenu>
          </li>
          <li>
            <NavMenu to="/login">Login</NavMenu>
          </li>
        </nav>

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/sobre" element={<About />} />
          <Route path="/contrato" element={<Contrato />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/meus-animais" element={<MeusAnimais />} />
          <Route path="/doar" element={<Doar />} />
          <Route path="/adotar" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
