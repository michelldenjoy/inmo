import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
  });

  // Autoplay
 

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
      <h2 className="text-3xl font-bold text-center mb-8">Propiedades destacadas</h2>

      {/* Flechas */}
      <div className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => slider.current?.prev()}
          className="bg-white shadow p-2 rounded-full hover:bg-gold hover:text-white transition"
        >
          <ChevronLeft />
        </button>
      </div>

      <div className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => slider.current?.next()}
          className="bg-white shadow p-2 rounded-full hover:bg-gold hover:text-white transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Carrusel */}
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={item.imagen}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
