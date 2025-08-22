import { Shield, Award, Clock, Users, Heart, Star } from "lucide-react";

const TextoViviendas = () => {
  const isVisible = true; // siempre visible

  const garantias = [
    {
      icon: Shield,
      title: "Contratos Transparentes",
      description:
        "Sin letra pequeña ni sorpresas. Cada detalle explicado con claridad.",
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description:
        "Atención personalizada cuando la necesites, cualquier día del año.",
    },
    {
      icon: Award,
      title: "Mantenimiento Premium",
      description:
        "Cuidamos cada detalle para que solo te preocupes por disfrutar.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-elegant-white via-gold-50 to-gold-100 py-24 px-6 border-t border-elegant-gray-200 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gold-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Encabezado principal */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500"></div>
            <div className="mx-6 p-3 bg-elegant-white rounded-full shadow-elegant border border-gold-200">
              <Heart className="w-6 h-6 text-gold-500" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-elegant-gray-800 leading-relaxed mb-8 max-w-4xl mx-auto">
            <span className="text-gold-500 font-medium">Su tranquilidad</span>{" "}
            es nuestra <span className="italic">prioridad absoluta</span>
          </h2>

          <p className="text-xl md:text-2xl text-elegant-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-4">
            Cada propiedad está respaldada por nuestro compromiso inquebrantable
            con la excelencia y su total satisfacción.
          </p>

          <div className="flex items-center justify-center space-x-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 transition-all duration-500 ${
                  isVisible
                    ? "text-gold-500 fill-current"
                    : "text-elegant-gray-300"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              />
            ))}
            <span className="ml-3 text-elegant-gray-500 font-light">
              Valoración de nuestros clientes
            </span>
          </div>
        </div>

        {/* Tarjetas de garantías */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {garantias.map((garantia, index) => (
            <div
              key={index}
              className={`group relative bg-elegant-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-elegant-lg border border-elegant-white/50 hover:shadow-elegant-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 shadow-elegant group-hover:scale-110 transition-transform duration-300">
                  <garantia.icon className="w-8 h-8 text-elegant-white" />
                </div>
                <h3 className="text-xl font-serif font-medium text-elegant-gray-800 mb-4">
                  {garantia.title}
                </h3>
                  {garantia.description}
                <p className="text-elegant-gray-600 leading-relaxed font-light">
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje principal destacado */}
        <div
          className={`relative bg-elegant-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-elegant-2xl border border-elegant-white/50 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-full mb-8 shadow-elegant">
              <Users className="w-6 h-6 text-elegant-white" />
            </div>

            <blockquote className="text-2xl md:text-3xl font-serif font-light text-elegant-gray-800 leading-relaxed mb-8 italic relative">
              <span className="text-6xl text-gold-400/20 absolute -top-4 -left-4 font-serif">
                "
              </span>
              Todos nuestros apartamentos están{" "}
              <span className="text-gold-500 font-medium">
                administrados profesionalmente
              </span>{" "}
              por la inmobiliaria del complejo, garantizando{" "}
              <span className="text-gold-500 font-medium">
                contratos transparentes
              </span>
              ,{" "}
              <span className="text-gold-500 font-medium">
                mantenimiento impecable
              </span>{" "}
              y atención personalizada para una experiencia{" "}
              <span className="text-gold-500 font-medium">
                completamente libre de preocupaciones
              </span>{" "}
              durante toda su estadía.
              <span className="text-6xl text-gold-400/20 absolute -bottom-8 -right font-serif">
                "
              </span>
            </blockquote>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-elegant-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span>Administración profesional</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span>Respuesta inmediata</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span>Satisfacción garantizada</span>
              </div>
            </div>
          </div>

          {/* Decoración inferior */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-16 h-1 bg-gradient-gold rounded-full"></div>
          </div>
        </div>

        {/* Llamada a la acción sutil */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-lg text-gray-600 font-light mb-6">
            ¿Listo para vivir sin preocupaciones?
          </p>
          <button className="group inline-flex items-center space-x-2 text-[#c3a265] hover:text-[#b89554] font-medium transition-colors duration-300">
            <span>Descubra nuestras propiedades</span>
            <div className="w-8 h-px bg-[#c3a265] group-hover:w-12 transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TextoViviendas;