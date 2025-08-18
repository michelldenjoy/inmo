import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Viviendas from "./Pages/Viviendas";
import Comercios from "./Pages/Comercios";
import About from "./Pages/About";
import Contacto from "./Pages/Contacto";
import DetalleVivienda from "./Pages/DetalleVivienda";
import DetalleComercio from "./Pages/DetalleComercio";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/viviendas" element={<Viviendas />} />
    <Route path="/comercios" element={<Comercios />} />
    <Route path="/about" element={<About />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/viviendas/:id" element={<DetalleVivienda />} />
    <Route path="/comercios/:id" element={<DetalleComercio />} />
  </Routes>
);

export default MainRoutes;
