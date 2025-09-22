import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Mock components para el ejemplo - en tu proyecto usa react-router-dom
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;
const NavLink = ({ to, className, children }) => {
  const isActive = window.location.pathname === to;
  return (
    <a 
      href={to} 
      className={typeof className === 'function' ? className({ isActive }) : className}
    >
      {typeof children === 'function' ? children({ isActive }) : children}
    </a>
  );
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses = ({ isActive }) =>
    `relative font-sans text-sm tracking-wider uppercase font-medium transition-all duration-300 pb-2 ${
      isActive
        ? "text-gold-600"
        : "text-elegant-gray-700 hover:text-gold-600"
    }`;

  const menuItems = [
    { to: "/", label: "Inicio" },
    { to: "/viviendas", label: "Viviendas" },
    { to: "/comercios", label: "Comercios" },
    { to: "/about", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-elegant-white/95 backdrop-blur-md shadow-elegant border-b border-gold-100" 
          : "bg-elegant-white/90 backdrop-blur-sm"
      }`}
      style={{
        transform: 'translateY(0)',
        animation: 'slideDown 0.6s ease-out'
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo elegante */}
        <Link to="/" className="group">
          <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            {/* Símbolo minimalista */}
            <div className="w-10 h-10 border-2 border-gold-500 rotate-45 relative group-hover:border-gold-600 transition-colors duration-300">
              <div className="absolute inset-2 bg-gold-500 rotate-45 group-hover:bg-gold-600 transition-colors duration-300"></div>
            </div>
            <div className="font-serif text-xl text-elegant-black font-light tracking-wide">
              <span className="text-gold-600">Aunar</span>
              <span className="block text-sm text-elegant-gray-600 font-sans tracking-wider uppercase mt-1">
                Prestige
              </span>
            </div>
          </div>
        </Link>

        {/* Botón Hamburguesa Premium (Mobile) */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="w-10 h-10 flex items-center justify-center border border-elegant-gray-300 hover:border-gold-500 rounded-sm transition-all duration-300 group active:scale-95"
            aria-label="Abrir menú"
          >
            <div className="transition-transform duration-200">
              {menuOpen ? (
                <X className="w-5 h-5 text-elegant-gray-700 group-hover:text-gold-600" style={{ transform: 'rotate(0deg)' }} />
              ) : (
                <Menu className="w-5 h-5 text-elegant-gray-700 group-hover:text-gold-600" />
              )}
            </div>
          </button>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center space-x-12">
          {menuItems.map((item, index) => (
            <div
              key={item.to}
              className="relative"
              style={{ 
                opacity: 0,
                animation: `fadeInUp 0.3s ease-out ${index * 0.1}s forwards`
              }}
            >
              <NavLink to={item.to} className={linkClasses}>
                {({ isActive }) => (
                  <>
                    {item.label}
                    {/* Línea dorada animada */}
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 hover:w-full"
                      }`}
                      style={{ transformOrigin: 'left' }}
                    />
                  </>
                )}
              </NavLink>
            </div>
          ))}
          
          {/* CTA Button */}
          <div
            style={{ 
              opacity: 0,
              animation: 'fadeInRight 0.4s ease-out 0.6s forwards'
            }}
          >
            <Link to="/contacto">
              <button className="px-6 py-2 border border-gold-500 text-gold-600 font-sans font-medium text-sm tracking-wider uppercase hover:bg-gold-500 hover:text-elegant-white hover:scale-105 active:scale-95 transition-all duration-300">
                Consulta Privada
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Menú Mobile Premium */}
      {menuOpen && (
        <div
          className="md:hidden bg-elegant-white/98 backdrop-blur-md border-t border-gold-100 overflow-hidden"
          style={{
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          <div className="px-6 py-8">
            <div className="flex flex-col space-y-6">
              {menuItems.map((item, index) => (
                <div
                  key={item.to}
                  style={{
                    opacity: 0,
                    animation: `fadeInLeft 0.3s ease-out ${index * 0.1}s forwards`
                  }}
                >
                  <NavLink 
                    to={item.to} 
                    onClick={toggleMenu}
                    className={({ isActive }) => 
                      `block font-sans text-lg font-medium tracking-wide pb-3 border-b border-elegant-gray-100 transition-all duration-300 ${
                        isActive 
                          ? "text-gold-600 border-gold-200" 
                          : "text-elegant-gray-700 hover:text-gold-600 hover:border-gold-200"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </div>
              ))}
              
              {/* CTA Mobile */}
              <div
                style={{
                  opacity: 0,
                  animation: 'fadeInUp 0.4s ease-out 0.5s forwards'
                }}
                className="pt-4"
              >
                <Link to="/contacto" onClick={toggleMenu}>
                  <button className="w-full py-3 border border-gold-500 text-gold-600 font-sans font-medium tracking-wider uppercase hover:bg-gold-500 hover:text-elegant-white transition-all duration-300">
                    Consulta Privada
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Línea dorada decorativa */}
      <div
        className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent w-full transition-transform duration-500 origin-center ${
          scrolled ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default NavBar;