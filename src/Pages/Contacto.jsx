import { useState } from "react";
import { CheckCircle, Home, Building, Mail } from "lucide-react";

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setEnviado(true), 700);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f8f6f2] via-[#faf8f4] to-[#f5f2ec] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#c3a265] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#d4b876] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#b89554] rounded-full blur-2xl"></div>
      </div>

      <div className="relative w-full max-w-3xl">
        {enviado ? (
          <div className="bg-white/90 backdrop-blur-sm p-16 rounded-[2rem] shadow-2xl border border-white/50 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#c3a265] to-[#b89554] rounded-full mb-8 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4 tracking-wide">
              Su mensaje ha sido recibido
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
              Gracias por confiar en nosotros. Nuestro equipo se pondrá en contacto en las próximas 24 horas para atender personalmente su consulta.
            </p>
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-[#c3a265] to-[#b89554] rounded-full mx-auto"></div>
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm p-12 md:p-16 rounded-[2rem] shadow-2xl border border-white/50">
            {/* Header elegante */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c3a265] to-[#b89554] rounded-full mb-6 shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 mb-4 tracking-wide leading-tight">
                Su nuevo hogar le espera
              </h2>
              <p className="text-xl text-[#c3a265] font-light tracking-wide">
                Permítanos acompañarle en la búsqueda de su propiedad ideal
              </p>
              <div className="mt-6 h-1 w-32 bg-gradient-to-r from-[#c3a265] to-[#b89554] rounded-full mx-auto"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Nombre */}
              <div className="group relative">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-800 text-lg py-4 px-0 focus:border-[#c3a265] focus:outline-none transition-all duration-500 placeholder-transparent"
                />
                <label 
                  htmlFor="nombre" 
                  className="absolute left-0 top-4 text-gray-500 text-lg transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-[#c3a265] peer-focus:text-sm peer-focus:font-medium peer-valid:top-0 peer-valid:text-[#c3a265] peer-valid:text-sm"
                >
                  Nombre completo
                </label>
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-[#c3a265] to-[#b89554] transition-all duration-500 peer-focus:w-full"></div>
              </div>

              {/* Email */}
              <div className="group relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-800 text-lg py-4 px-0 focus:border-[#c3a265] focus:outline-none transition-all duration-500 placeholder-transparent"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-gray-500 text-lg transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-[#c3a265] peer-focus:text-sm peer-focus:font-medium peer-valid:top-0 peer-valid:text-[#c3a265] peer-valid:text-sm"
                >
                  Correo electrónico
                </label>
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-[#c3a265] to-[#b89554] transition-all duration-500 peer-focus:w-full"></div>
                <Mail className="absolute right-0 top-4 w-5 h-5 text-gray-300 peer-focus:text-[#c3a265] transition-colors duration-300" />
              </div>

              {/* Teléfono */}
              <div className="group relative">
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder=" "
                  className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-800 text-lg py-4 px-0 focus:border-[#c3a265] focus:outline-none transition-all duration-500 placeholder-transparent"
                />
                <label 
                  htmlFor="telefono" 
                  className="absolute left-0 top-4 text-gray-500 text-lg transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-[#c3a265] peer-focus:text-sm peer-focus:font-medium peer-valid:top-0 peer-valid:text-[#c3a265] peer-valid:text-sm"
                >
                  Teléfono (opcional)
                </label>
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-[#c3a265] to-[#b89554] transition-all duration-500 peer-focus:w-full"></div>
              </div>

              {/* Tipo de propiedad con iconos */}
              <div className="space-y-6">
                <label className="block text-gray-600 text-lg font-light tracking-wide">
                  Tipo de propiedad de interés
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: "vivienda", label: "Vivienda de lujo", icon: Home },
                    { value: "comercio", label: "Local comercial", icon: Building },
                    { value: "otro", label: "Otra consulta", icon: Mail }
                  ].map(({ value, label, icon: Icon }) => (
                    <label key={value} className="group cursor-pointer">
                      <input
                        type="radio"
                        name="tipo"
                        value={value}
                        required
                        className="sr-only peer"
                      />
                      <div className="flex items-center space-x-3 p-6 bg-gray-50/50 rounded-xl border-2 border-transparent peer-checked:border-[#c3a265] peer-checked:bg-[#c3a265]/5 transition-all duration-300 hover:bg-gray-50">
                        <Icon className="w-6 h-6 text-gray-400 peer-checked:text-[#c3a265] group-hover:text-[#c3a265] transition-colors duration-300" />
                        <span className="text-gray-700 peer-checked:text-[#c3a265] peer-checked:font-medium transition-all duration-300">
                          {label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mensaje */}
              <div className="group relative">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-800 text-lg py-4 px-0 focus:border-[#c3a265] focus:outline-none transition-all duration-500 placeholder-transparent resize-none"
                ></textarea>
                <label 
                  htmlFor="mensaje" 
                  className="absolute left-0 top-4 text-gray-500 text-lg transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-[#c3a265] peer-focus:text-sm peer-focus:font-medium peer-valid:top-0 peer-valid:text-[#c3a265] peer-valid:text-sm"
                >
                  Cuéntenos sobre su propiedad ideal
                </label>
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-[#c3a265] to-[#b89554] transition-all duration-500 peer-focus:w-full"></div>
              </div>

              {/* Botón elegante */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-[#c3a265] to-[#b89554] text-white text-lg font-light tracking-wider rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Comenzar mi búsqueda</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b89554] to-[#a68643] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <p className="mt-4 text-sm text-gray-500 font-light">
                  Respuesta garantizada en 24 horas
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contacto;