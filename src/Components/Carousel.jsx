import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop:true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Autoplay: cada 5 segundos
  useEffect(() => {
    if (!instanceRef.current) return;
    const interval = setInterval(() => {
      instanceRef.current.next();
    }, 5000); // 5000 ms = 5 segundos
    return () => clearInterval(interval);
  }, [instanceRef, loaded]);

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
      title: "Local comercial",
      descripcion: "Ideal para emprendedores, en zona de alto tránsito.",
      imagen: "https://tucasaen3d.es/wp-content/uploads/2021/08/SCC-interior001.jpg",
    },
  ];

  return (
    <section className="px-6 py-16 bg-white relative">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Propiedades destacadas</h2> */}

      {/* Flechas */}
      {loaded && instanceRef.current && (
        <>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-white shadow p-2 rounded-full hover:bg-gold hover:text-white transition"
              disabled={currentSlide === 0}
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-white shadow p-2 rounded-full hover:bg-gold hover:text-white transition"
              disabled={
                currentSlide === instanceRef.current.track.details.slides.length - 1
              }
            >
              <ChevronRight />
            </button>
          </div>
        </>
      )}

      {/* Slide */}
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide w-full h-[600px] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden shadow"
          >
            <img
              src={item.imagen}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded text-white max-w-xs">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-1">{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from(
            { length: instanceRef.current.track.details.slides.length },
            (_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx ? "bg-gold" : "bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      )}
    </section>
  );
};

export default Carousel;
