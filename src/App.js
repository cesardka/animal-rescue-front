import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import { Login } from "./pages/login";
import { Contrato } from "./pages/contrato";
import { MeusAnimais } from "./pages/meus-animais";
import { Perfil } from "./pages/perfil";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-style" : "none"
              }
              to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-style" : "none"
              }
              to='/sobre'>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-style" : "none"
              }
              to='/contrato'>
              Contrato
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-style" : "none"
              }
              to='/perfil'>
              Perfil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-style" : "none"
              }
              to='/meus-animais'>
              Meus animais
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-style" : "none"
              }
              to='/doar'>
              Doar
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-style" : "none"
              }
              to='/adotar'>
              Adotar
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active-style" : "none"
              }
              to='/login'>
              Login
            </NavLink>
          </li>
        </nav>

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path='/sobre' element={<About />} />
          <Route path='/contrato' element={<Contrato />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/meus-animais' element={<MeusAnimais />} />
          <Route path='/doar' element={<About />} />
          <Route path='/adotar' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
