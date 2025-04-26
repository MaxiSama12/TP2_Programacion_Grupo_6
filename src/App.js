import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import LoginPages from "./pages/LoginPages";
import ViewPages from "./pages/ViewPages";
import RegisterPages from "./pages/RegisterPages";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Integrantes del Grupo 6:
//Micaela Ponce - Legajo: 61046
//Samaniego Esteban Maximiliano, Legajo: 61468
//Gabriel Timo - Legajo: 61240
//Franco Giacobbe - Legajo: 61167
//Juan Daniel Morales - Legajo: 61338
//Pablo Emanuel Ruiz - Legajo: 61324

function App() {
  const integrantes = [
    {
      nombre: "Gabriel",
      apellido: "Timo",
      legajo: "61240",
      github: "https://github.com/GabrielTimo006",
      foto: "/imagenes/Gabi.jpeg",
    },
    {
      nombre: "Esteban Maximiliano",
      apellido: "Samaniego",
      legajo: "61468",
      github: "https://github.com/MaxiSama12",
      foto: "/imagenes/Esteban.jpeg",
    },
    {
      nombre: "Juan Daniel",
      apellido: "Morales",
      legajo: "61338",
      github: "https://github.com/JuanMo17",
      foto: "/imagenes/Juan.jpeg",
    },
    {
      nombre: "Franco",
      apellido: "Giacobbe",
      legajo: "61167",
      github: "https://github.com/frandg47",
      foto: "/imagenes/Franco.jpeg",
    },
    {
      nombre: "Pablo Emanuel",
      apellido: "Ruiz",
      legajo: "61324",
      github: "https://github.com/PbloRuiz",
      foto: "/imagenes/Pablo.jpeg",
    },
    {
      nombre: "Luz Micaela",
      apellido: "Ponce",
      legajo: "61046",
      github: "https://github.com/Mica8p",
      foto: "/imagenes/Mica.png",
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main integrantes={integrantes} />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        {/* <Route path="/nosotros" element={<NosotrosPages />} /> */}
        <Route path="/view" element={<ViewPages />} />
        {/* <Route path="/home" element={<HomePages />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
