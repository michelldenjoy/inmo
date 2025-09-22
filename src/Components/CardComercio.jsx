import { 
  Ruler, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  MessageCircle, 
  Building2,
  MapPin 
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BsCurrencyEuro } from "react-icons/bs";

const CardComercio = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const nextSlide = () => instanceRef.current?.next();
  const prevSlide = () => instanceRef.current?.prev();

  return (
    <div className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      {/* Carousel */}
      <div className="relative w-full sm:w-1/2 h-56 sm:h-72 overflow-hidden rounded-t-xl sm:rounded-l-xl">
        <div ref={sliderRef} className="keen-slider h-full">
          {data.imagenes.map((img, idx) => (
            <div key={idx} className="keen-slider__slide">
              <Link to={`/comercios/${data.id}`}>
              <img
                src={img}
                alt={`Comercio ${data.id} - img ${idx}`}
                className="w-full h-full object-cover rounded-t-xl sm:rounded-l-xl"
              />
              </Link>
            </div>
          ))}
          <div className="absolute bottom-3 right-3 text-xs bg-black/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/20">
            {currentSlide + 1} / {data.imagenes.length}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-2.5 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-2.5 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Contenido */}
      <div className="p-4 sm:p-6 flex flex-col justify-between sm:space-y-6 w-full">
        <div>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-serif text-gray-800 leading-snug flex-1 pr-3">
              {data.titulo}
            </h3>
            
            {/* Estado - Movido arriba y más elegante */}
            {data.estado && (
              <div className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200
                ${data.estado === 'disponible'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  data.estado === 'disponible' ? 'bg-emerald-500' : 'bg-rose-500'
                }`}></div>
                {data.estado === 'disponible' ? 'Disponible' : 'Rentado'}
              </div>
            )}
          </div>

          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{data.summary}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
              <Ruler size={16} className="text-gray-500" /> 
              <span className="font-medium">{data.metros}</span>
              <span className="text-xs text-gray-500">m²</span>
            </span>
            
            <span className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 rounded-lg border border-blue-100">
              <Building2 size={16} className="text-blue-600" />
              <span className="font-medium text-blue-800">{data.planta}</span>
            </span>
            
            <span className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-2 rounded-lg border border-amber-100 sm:col-span-1">
              <BsCurrencyEuro size={16} className="text-amber-600" />
              <span className="font-semibold text-amber-800">{data.precio}</span>
              <span className="text-xs text-amber-600">/mes</span>
            </span>
          </div>
        </div>

        {/* Botones de acción - Más elegantes y delicados */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
          <Link
            to={`/comercios/${data.id}`}
            className="group flex items-center justify-center gap-2 bg-gradient-to-tr from-gold-200 to-gold-100 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:shadow-sm"
          >
            <Eye size={16} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Ver detalles</span>
          </Link>

          <Link
            to="/contacto"
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 hover:shadow-lg hover:shadow-gray-900/25 transform hover:-translate-y-0.5"
          >
            <MessageCircle size={16} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Solicitar información</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardComercio;