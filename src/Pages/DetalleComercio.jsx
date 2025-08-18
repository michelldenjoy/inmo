import { useParams } from "react-router-dom";
import { comercios } from "../data/comercios";
import {
  Ruler,
  Euro,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const DetalleComercio = () => {
  const { id } = useParams();
  const comercio = comercios.find((c) => c.id === parseInt(id));

  const [sliderRef, instanceRef] = useKeenSlider({ loop: true });
  const next = () => instanceRef.current?.next();
  const prev = () => instanceRef.current?.prev();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSliderRef, modalSliderInstanceRef] = useKeenSlider({ loop: true });

  if (!comercio) {
    return (
      <div className="text-center py-20 text-xl">
        Comercio no encontrado.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white px-6 py-24 max-w-6xl mx-auto">
      {/* Galería */}
      <div className="relative mb-12 rounded-2xl overflow-hidden shadow-lg">
        <div ref={sliderRef} className="keen-slider h-80 md:h-[450px]">
          {comercio.imagenes.map((img, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <img
                src={img}
                alt={`Imagen ${idx}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setModalOpen(true)}
              />
            </div>
          ))}
        </div>
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black bg-opacity-70 p-2 rounded-full shadow hover:bg-gold transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black bg-opacity-70 p-2 rounded-full shadow hover:bg-gold transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Info */}
      {/* Info */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Columna izquierda: Descripción del comercio */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-serif text-gray-900">
            {comercio.titulo}
          </h1>

          <h3 className="text-xl font-serif text-gray-600">
            {comercio.summary}
          </h3>

          <div className="flex flex-wrap gap-6 text-gray-700 text-sm">
            <span className="flex items-center gap-2">
              <Ruler size={18} /> {comercio.metros} m²
            </span>
            <span className="flex items-center gap-2">
              <Euro size={18} /> {comercio.precio}€/mes
            </span>
          </div>

          <div className="text-gray-600 leading-relaxed text-base pt-4">
            {comercio.descripcion}
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacto"
              className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gold hover:text-black transition text-center"
            >
              Solicitar más información
            </Link>
            <a
              href="https://wa.me/34615161958"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition text-center"
            >
              Contactar por WhatsApp
            </a>
          </div>
          {/* Mapa del Inmueble */}
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="text-center text-gray-500 italic">Aquí irá el mapa de ubicación</p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">
              Interesado en este local
            </h4>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="tucorreo@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  placeholder="Estoy interesado en este local comercial..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-gold"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gold hover:text-black transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>


      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-gold transition z-10"
            >
              <X size={20} />
            </button>

            <div
              ref={modalSliderRef}
              className="keen-slider h-[70vh] rounded-xl overflow-hidden"
            >
              {comercio.imagenes.map((img, idx) => (
                <div className="keen-slider__slide" key={idx}>
                  <img
                    src={img}
                    alt={`Detalle ${idx}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => modalSliderInstanceRef.current?.prev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 text-black p-2 rounded-full hover:bg-gold transition z-10"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => modalSliderInstanceRef.current?.next()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 text-black p-2 rounded-full hover:bg-gold transition z-10"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetalleComercio;
