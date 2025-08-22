import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Asegúrate de tener instalada lucide-react

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-gold font-semibold border-b-2 border-gold pb-1"
      : "text-gray-800 hover:text-gold transition pb-1";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black">
          Mi Inmobiliaria
        </Link>

        {/* Botón Hamburguesa (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menú">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base">
          <li><NavLink to="/" className={linkClasses}>Inicio</NavLink></li>
          <li><NavLink to="/viviendas" className={linkClasses}>Viviendas</NavLink></li>
          <li><NavLink to="/comercios" className={linkClasses}>Comercios</NavLink></li>
          <li><NavLink to="/contacto" className={linkClasses}>Contacto</NavLink></li>
          <li><NavLink to="/about" className={linkClasses}>Sobre Nosotros</NavLink></li>
        </ul>
      </nav>

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6">
          <ul className="flex flex-col gap-4">
            <li><NavLink to="/" onClick={toggleMenu} className={linkClasses}>Inicio</NavLink></li>
            <li><NavLink to="/viviendas" onClick={toggleMenu} className={linkClasses}>Viviendas</NavLink></li>
            <li><NavLink to="/comercios" onClick={toggleMenu} className={linkClasses}>Comercios</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu} className={linkClasses}>Sobre Nosotros</NavLink></li>
            <li><NavLink to="/contacto" onClick={toggleMenu} className={linkClasses}>Contacto</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
