import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* margen decorativo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-300 to-transparent opacity-60"></div>
      {/* Contenido principal */}
      <div className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Grid principal */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Logo y descripción */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-serif font-light tracking-[0.15em] bg-gradient-to-r from-gold-500 to-gold-100 bg-clip-text text-transparent">
                  MI INMOBILIARIA
                </h2>  {/* linea decorativa */}
                <div className="w-20 h-px bg-gradient-to-r from-gold-400 to-transparent"></div>
              </div>
              <p className="text-gray-300 text-base leading-7 max-w-md font-light">
                Espacios pensados para vivir y emprender. Alquiler de viviendas y locales
                para larga estancia en ubicaciones privilegiadas de la ciudad.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Clock size={16} className="text-gold-400" />
                <span>Disponibles 24/7 para nuestros clientes</span>
              </div>
            </div>

            {/* Navegacion */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-1 text-gold-400 tracking-wide">NAVEGACIÓN</h3>
                <div className="w-9 h-px bg-gradient-to-r from-gold-400 to-transparent"></div>
              </div>
              <nav>
                <ul className="space-y-4">
                  {[
                    { to: "/", label: "Inicio" },
                    { to: "/viviendas", label: "Viviendas" },
                    { to: "/comercios", label: "Comercios" },
                    { to: "/about", label: "Nuestra Historia" },
                    { to: "/contacto", label: "Contacto" }
                  ].map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-gray-300 hover:text-gold-400 transition-all duration-300 text-sm font-light tracking-wide flex items-center group"
                      >
                        <span className="w-0 h-px bg-gold-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contacto */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-1 text-gold-400 tracking-wide">CONTACTO</h3>
                <div className="w-9 h-px bg-gradient-to-r from-gold-400 to-transparent"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-gold-400 mt-1 flex-shrink-0" />
                  <a href="mailto:info@miinmobiliaria.com" className="text-gray-300 hover:text-gold-400 transition text-sm">
                    info@miinmobiliaria.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-gold-400 mt-1 flex-shrink-0" />
                  <a href="tel:+34615161958" className="text-gray-300 hover:text-gold-400 transition text-sm">
                    +34 615 161 958
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Ubicaciones privilegiadas<br />
                  
                  </span>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="pt-6">
                <div className="flex gap-4">
                  {[
                    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
                    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
                    { href: "https://wa.me/34615161958", icon: FaWhatsapp, label: "WhatsApp" }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? "_blank" : undefined}
                      rel={social.href.startsWith('http') ? "noreferrer" : undefined}
                      className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-gold-400 hover:bg-gold-400/10 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon size={18} className="text-gray-400 group-hover:text-gold-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 bg-black">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} Mi Inmobiliaria. Todos los derechos reservados.
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Desarrollado con</span>
              <span className="text-red-500 text-base animate-pulse">♥</span>
              <span>por</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gold-400 hover:text-gold-300 transition font-medium"
              >
                @michelldenjoy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorativo bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
    </footer>
  );
};

export default Footer;