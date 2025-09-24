import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      title: "Apartamento en el centro",
      descripcion: "Luminoso y moderno, con balcón y excelente ubicación.",
      imagen: "https://tucasaen3d.es/wp-content/uploads/2021/08/Exterior002noche.jpg",
    },
    {
      title: "Local comercial",
      descripcion: "Ideal para emprendedores, en zona de alto tránsito.",
      imagen: "https://tucasaen3d.es/wp-content/uploads/2021/08/SCC-interior001.jpg",
    },
    {
      title: "Ático con vistas",
      descripcion: "Espacioso, moderno, con terraza espectacular.",
      imagen: "https://tucasaen3d.es/wp-content/uploads/2021/08/BBQ1_Noche.jpg",
    },
    {
      title: "Loft de diseño",
      descripcion: "Minimalista, moderno y funcional. Ideal para creativos.",
      imagen: "https://tucasaen3d.es/wp-content/uploads/2018/01/Portada-1.jpg",
    },
    {
      title: "Local comercial premium",
      descripcion: "Ideal para emprendedores, en zona de alto tránsito.",
      imagen: "https://tucasaen3d.es/wp-content/uploads/2021/08/SCC-interior001.jpg",
    },
  ];

  // Navegación
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay: cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="w-full relative overflow-hidden bg-black">
      {/* Contenedor principal del carousel */}
      <div 
        className="relative w-full transition-all duration-700 ease-in-out"
        style={{
          height: 'clamp(400px, 70vh, 800px)'
        }}
      >
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full h-full"
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <img
                  src={item.imagen}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  loading={index === 0 ? "eager" : "lazy"}
                  style={{
                    transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                {/* Overlay gradiente para mejor legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Contenido del slide */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8 xl:p-12">
                <div 
                  className={`max-w-4xl transform transition-all duration-700 ${
                    currentSlide === index 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: currentSlide === index ? '300ms' : '0ms' }}
                >
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 max-w-2xl leading-relaxed">
                    {item.descripcion}
                  </p>
                  
                  {/* Botón CTA
                  <div className="mt-4 sm:mt-6 lg:mt-8">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Ver detalles
                    </button>
                  </div> */}
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>

      {/* Flechas de navegación */}
      <div className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="bg-white/90 backdrop-blur-sm shadow-lg p-2 sm:p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-amber-600" />
        </button>
      </div>
      
      <div className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="bg-white/90 backdrop-blur-sm shadow-lg p-2 sm:p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-amber-600" />
        </button>
      </div>

      {/* Dots de navegación */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex justify-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx 
                  ? "bg-amber-500 scale-125" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-amber-500 transition-all duration-700 ease-out"
          style={{ 
            width: `${((currentSlide + 1) / items.length) * 100}%` 
          }}
        />
      </div>

      {/* Indicadores de swipe para móvil */}
      <div 
        className="absolute inset-0 z-10 flex"
        onTouchStart={(e) => {
          const touchStart = e.touches[0].clientX;
          
          const handleTouchEnd = (e) => {
            const touchEnd = e.changedTouches[0].clientX;
            const diff = touchStart - touchEnd;
            
            if (Math.abs(diff) > 50) {
              if (diff > 0) {
                nextSlide();
              } else {
                prevSlide();
              }
            }
            
            document.removeEventListener('touchend', handleTouchEnd);
          };
          
          document.addEventListener('touchend', handleTouchEnd);
        }}
      >
        {/* Área invisible para gestos táctiles */}
      </div>
    </section>
  );
};

export default Carousel;