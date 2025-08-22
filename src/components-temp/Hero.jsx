import { Link } from "react-router-dom";
import { ChevronRight, Play, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen h-screen overflow-hidden">
      {/* Video de fondo (opcional) o imagen mejorada */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Hogar de lujo"
          className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-[20s] ease-out"
          style={{
            transform: `scale(${1.1 + scrollY * 0.0002}) translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Gradiente sofisticado multicapa */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-10 w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-16 w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent hidden lg:block" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-16 sm:py-20">
        

        {/* Título principal - entrada sutil y elegante */}
        <h1 className={`text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light tracking-wide leading-tight mb-4 sm:mb-6 px-2 transition-all duration-[2000ms] ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 '}`}>
          <span className="block">Espacios que</span>
          <span className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent font-medium">
            inspiran grandeza
          </span>
        </h1>

        {/* Subtítulo elegante */}
        <p className={`text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl leading-relaxed font-light px-4 sm:px-6 md:px-0 transition-all duration-[2000ms] ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-2 '}`}>
          <span className="block">Descubre residencias y espacios comerciales únicos en ubicaciones privilegiadas.</span>
          <span className="block mt-1 sm:mt-2 text-white/70 text-sm sm:text-base md:text-lg">
            Donde cada detalle refleja tu éxito.
          </span>
        </p>

        {/* Estadísticas elegantes */}
        <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 mb-6 sm:mb-10 px-4 transition-all duration-[2500ms] ease-out delay-800 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-2 blur-sm'}`}>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1">50+</div>
            <div className="text-white/70 text-xs md:text-sm uppercase tracking-widest">Propiedades</div>
          </div>
          <div className="w-px h-10 sm:h-12 bg-white/20 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1">15+</div>
            <div className="text-white/70 text-xs md:text-sm uppercase tracking-widest">Años exp.</div>
          </div>
          <div className="w-px h-10 sm:h-12 bg-white/20 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1">100%</div>
            <div className="text-white/70 text-xs md:text-sm uppercase tracking-widest">Satisfacción</div>
          </div>
        </div>

        {/* Botones de lujo */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0 w-full sm:w-auto transition-all duration-[2500ms] ease-out delay-1100 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-2 blur-sm'}`}>
          <Link to="/viviendas" className="group w-full sm:w-auto">
            <button className="w-full sm:w-auto relative overflow-hidden bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-transparent hover:text-white transition-all duration-500 border border-transparent hover:border-white/30 hover:backdrop-blur-sm min-w-0 sm:min-w-[180px]">
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                <span className="hidden sm:inline">Viviendas disponibles</span>
                <span className="sm:hidden">Residencias</span>
                <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </Link>

          <Link to="/comercios" className="group w-full sm:w-auto">
            <button className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from from-gold-800 to-gold-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:from-gold-500 hover:to-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/25 min-w-0 sm:min-w-[180px] hover:scale-105 transform">
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                <span className="hidden sm:inline">Espacios comerciales</span>
                <span className="sm:hidden">Comerciales</span>
                <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </Link>

          <Link to="/about" className="group w-full sm:w-auto">
            <button className="w-full sm:w-auto relative bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium border border-white/30 hover:border-white/60 transition-all duration-500 backdrop-blur-sm hover:bg-white/10 min-w-0 sm:min-w-[180px]">
              <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <span className="hidden sm:inline">Nuestra historia</span>
                <span className="sm:hidden">Historia</span>
                <Play size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>

        {/* Indicador de scroll elegante
        <div className={`absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-[3000ms] ease-out delay-1400 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-1 blur-sm'}`}>
          <div className="flex flex-col items-center text-white/60 animate-bounce">
            <span className="text-xs uppercase tracking-widest mb-2 sm:mb-3 hidden sm:block">Descubrir más</span>
            <ArrowDown size={16} className="sm:w-5 sm:h-5" />
          </div>
        </div> */}
      </div>


    </section>
  );
};

export default Hero;