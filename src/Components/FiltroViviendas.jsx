import React, { useState } from "react";
import { viviendas as allViviendas } from "../data/viviendas";
import CardVivienda from "../Components/CardVivienda";
import {
  Search,
  Filter,
  X,
  BedDouble,
  Bath,
  Ruler,
  Euro,
  Eye,
} from "lucide-react";

const FiltroViviendas = () => {
  const [estado, setEstado] = useState("");
  const [habitaciones, setHabitaciones] = useState("");
  const [banos, setBanos] = useState("");
  const [metrosMin, setMetrosMin] = useState(5); 
  const [precioMax, setPrecioMax] = useState(2000);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [mostrarTodas, setMostrarTodas] = useState(false); 
  const [ordenarPor, setOrdenarPor] = useState("relevancia");

  const viviendasFiltradas = allViviendas.filter((vivienda) => {
    
    if (mostrarTodas) return true;

    return (
      (estado === "" ||
        vivienda.estado.toLowerCase() === estado.toLowerCase()) &&
      (habitaciones === "" ||
        vivienda.habitaciones === parseInt(habitaciones)) &&
      (banos === "" || vivienda.banos === parseInt(banos)) &&
      vivienda.metros >= metrosMin && 
      vivienda.precio <= precioMax
    );
  });

  // Función de orden
  const viviendasOrdenadas = [...viviendasFiltradas].sort((a, b) => {
    switch (ordenarPor) {
      case "precio-asc":
        return a.precio - b.precio;
      case "precio-desc":
        return b.precio - a.precio;
      case "metros-desc":
        return b.metros - a.metros;
      case "metros-asc":
        return a.metros - b.metros;
      default: // relevancia
        return 0;
    }
  });

  const clearFilters = () => {
    setEstado("");
    setHabitaciones("");
    setBanos("");
    setMetrosMin(5); // Nuevo valor por defecto
    setPrecioMax(2000);
    setMostrarTodas(false);
  };

  const hasActiveFilters =
    estado !== "" ||
    habitaciones !== "" ||
    banos !== "" ||
    metrosMin !== 5 || 
    precioMax !== 2000;

  return (
    <section className="px-4 max-w-7xl mx-auto">
      {/* DECORADOR */}
      <div className="text-center mb-8 lg:mb-12">
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-28 h-px bg-gradient-to-r from-transparent to-gold-500"></div>
          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
          <div className="w-28 h-px bg-gradient-to-l from-transparent to-gold-500"></div>
        </div>

        <p className="text-elegant-gray-600 font-thin tracking-wide text-2xl max-w-2xl mx-auto leading-relaxed">
          Descubre espacios únicos donde cada detalle refleja tu hogar
        </p>
      </div>

      {/* FILTROS*/}
      <div className="bg-white border-2 border-elegant-gray-200 rounded-2xl shadow-elegant-lg hover:shadow-elegant transition-all duration-300 mb-8 lg:mb-12 overflow-hidden">
        {/* Header del filtro */}
        <div className="bg-gradient-to-r from-elegant-gray-50 to-white p-4 sm:p-6 border-b-2 border-gold-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold-600 rounded-lg shadow-md">
                <Filter size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-black">
                  Filtros de búsqueda
                </h2>
                <p className="text-sm text-elegant-gray-600 hidden sm:block">
                  Encuentra tu hogar ideal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
             

              {/* Botón Ver todas */}
              <button
                onClick={() => setMostrarTodas(!mostrarTodas)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium ${
                  mostrarTodas
                    ? "bg-gold-600 text-white hover:bg-gold-500"
                    : "bg-elegant-gray-100 text-black hover:bg-elegant-gray-200"
                }`}
              >
                <Eye size={16} />
                <span className="hidden sm:inline">
                  {mostrarTodas ? "Aplicar filtros" : "Ver todas las Viviendas"}
                </span>
              </button>

              {/* Toggle móvil */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden p-2 bg-white rounded-lg shadow-sm border-2 border-gold-200"
              >
                <Filter size={18} className="text-gold-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Campos del filtro */}
        <div
          className={`p-4 sm:p-6 ${
            isFilterOpen ? "block" : "hidden md:block"
          } ${mostrarTodas ? "opacity-50" : ""}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {/* Estado */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-black">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                Estado
              </label>
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                disabled={mostrarTodas}
                className="w-full bg-white border-2 border-elegant-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-500 transition-all duration-200 hover:border-gold-300 disabled:opacity-50"
              >
                <option value="">Cualquier estado</option>
                <option value="disponible">✅ Disponible</option>
                <option value="rentado">🏠 Rentado</option>
              </select>
            </div>

            {/* Habitaciones */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-black">
                <BedDouble size={16} className="text-gold-600" />
                Habitaciones
              </label>
              <select
                value={habitaciones}
                onChange={(e) => setHabitaciones(e.target.value)}
                disabled={mostrarTodas}
                className="w-full bg-white border-2 border-elegant-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-500 transition-all duration-200 hover:border-gold-300 disabled:opacity-50"
              >
                <option value="">Cualquier cantidad</option>
                <option value="1">1 habitación</option>
                <option value="2">2 habitaciones</option>
                <option value="3">3 habitaciones</option>
                <option value="4">4+ habitaciones</option>
              </select>
            </div>

            {/* Baños */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-black">
                <Bath size={16} className="text-gold-600" />
                Baños
              </label>
              <select
                value={banos}
                onChange={(e) => setBanos(e.target.value)}
                disabled={mostrarTodas}
                className="w-full bg-white border-2 border-elegant-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-500 transition-all duration-200 hover:border-gold-300 disabled:opacity-50"
              >
                <option value="">Cualquier cantidad</option>
                <option value="1">1 baño</option>
                <option value="2">2 baños</option>
                <option value="3">3 baños</option>
                <option value="4">4+ baños</option>
              </select>
            </div>

            {/* METROS CUADRADOS MÍNIMOS - ACTUALIZADO */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-black">
                <Ruler size={16} className="text-gold-600" />
                Superficie mínima:{" "}
                <span className="font-bold text-gold-600">{metrosMin}m²</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min={5}
                  max={300}
                  step={5}
                  value={metrosMin}
                  onChange={(e) => setMetrosMin(Number(e.target.value))}
                  disabled={mostrarTodas}
                  className="w-full h-2 bg-elegant-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb disabled:opacity-50"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${
                      ((metrosMin - 5) / (300 - 5)) * 100
                    }%, #e5e5e5 ${
                      ((metrosMin - 5) / (300 - 5)) * 100
                    }%, #e5e5e5 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-elegant-gray-600 mt-1">
                  <span>5m²</span>
                  <span>300m²</span>
                </div>
              </div>
            </div>

            {/* Precio */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-black">
                <Euro size={16} className="text-gold-600" />
                Precio máximo:{" "}
                <span className="font-bold text-gold-600">
                  ${precioMax}/mes
                </span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min={100}
                  max={2000}
                  step={50}
                  value={precioMax}
                  onChange={(e) => setPrecioMax(Number(e.target.value))}
                  disabled={mostrarTodas}
                  className="w-full h-2 bg-elegant-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb disabled:opacity-50"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${
                      ((precioMax - 100) / (2000 - 100)) * 100
                    }%, #e5e5e5 ${
                      ((precioMax - 100) / (2000 - 100)) * 100
                    }%, #e5e5e5 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-elegant-gray-600 mt-1">
                  <span>$100</span>
                  <span>$2000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filtros activos */}
          {hasActiveFilters && (
            <div className="mt-6 pt-6 border-t-2 border-gold-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-black">
                  Filtros activos:
                </span>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-elegant-gray-800 transition-colors duration-200 text-sm font-medium"
                >
                  <X size={16} />
                  <span className="hidden sm:inline">Limpiar Filtros</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2"> //JS//
                {estado && (
                  <span className="inline-flex items-center gap-1 bg-gold-100 text-black border border-gold-300 px-3 py-1 rounded-full text-sm">
                    Estado: {estado} 
                    <button onClick={() => setEstado("")}>
                      <X size={14} className="hover:text-gold-600" />
                    </button>
                  </span>
                )}
                {habitaciones && (
                  <span className="inline-flex items-center gap-1 bg-gold-100 text-black border border-gold-300 px-3 py-1 rounded-full text-sm">
                    {habitaciones} hab
                    <button onClick={() => setHabitaciones("")}>
                      <X size={14} className="hover:text-gold-600" />
                    </button>
                  </span>
                )}
                {banos && (
                  <span className="inline-flex items-center gap-1 bg-gold-100 text-black border border-gold-300 px-3 py-1 rounded-full text-sm">
                    {banos} baños
                    <button onClick={() => setBanos("")}>
                      <X size={14} className="hover:text-gold-600" />
                    </button>
                  </span>
                )}
                {metrosMin !== 5 && (
                  <span className="inline-flex items-center gap-1 bg-gold-100 text-black border border-gold-300 px-3 py-1 rounded-full text-sm">
                    Mín {metrosMin}m²
                    <button onClick={() => setMetrosMin(5)}>
                      <X size={14} className="hover:text-gold-600" />
                    </button>
                  </span>
                )}
                {precioMax !== 2000 && (
                  <span className="inline-flex items-center gap-1 bg-gold-100 text-black border border-gold-300 px-3 py-1 rounded-full text-sm">
                    Max ${precioMax}
                    <button onClick={() => setPrecioMax(2000)}>
                      <X size={14} className="hover:text-gold-600" />
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RESULTADOS */}
      <div className="space-y-8">
        {viviendasFiltradas.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="relative">
              <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center mb-8">
                <Search size={80} className="text-gray-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <h3 className="text-2xl font-serif font-light text-black mb-4">
              No hay propiedades que coincidan
            </h3>
            <p className="text-elegant-gray-600 max-w-md mb-6 leading-relaxed">
              Hemos buscado en todo nuestro catálogo exclusivo, pero no
              encontramos propiedades con estos criterios.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-3 rounded-xl font-medium hover:from-gold-500 hover:to-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
            >
              <X size={18} />
              Limpiar filtros
            </button>
          </div>
        ) : (
          <>
            {/* Header de resultados */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b-2 border-gold-200">
              <div>
                <h3 className="text-xl font-semibold text-black">
                  {viviendasOrdenadas.length}{" "}
                  {viviendasOrdenadas.length === 1
                    ? "Propiedad Encontrada"
                    : "Propiedades Encontradas"}
                </h3>
                <p className="text-sm text-elegant-gray-600">
                  {mostrarTodas
                    ? "Mostrando todas las propiedades"
                    : "Ordenadas por relevancia"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-elegant-gray-600">
                  Ordenar por:
                </span>
                <select
                  value={ordenarPor}
                  onChange={(e) => setOrdenarPor(e.target.value)}
                  className="bg-white border-2 border-elegant-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-500"
                >
                  <option value="relevancia">Relevancia</option>
                  <option value="precio-asc">Precio: menor a mayor</option>
                  <option value="precio-desc">Precio: mayor a menor</option>
                  <option value="metros-desc">
                    Metros cuadrados: mayor a menor
                  </option>
                  <option value="metros-asc">
                    Metros cuadrados: menor a mayor
                  </option>
                </select>
              </div>
            </div>

            {/* Grid de resultados */}
            <div className="space-y-8">
              {viviendasOrdenadas.map((vivienda) => (
                <div key={vivienda.id} className="animate-fadeIn">
                  <CardVivienda data={vivienda} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CSS para el slider personalizado */}
      <style >{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
          cursor: pointer;
          border: 2px solid white;
          transition: all 0.2s ease;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(212, 175, 55, 0.6);
        }

        .slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
          cursor: pointer;
          border: 2px solid white;
          transition: all 0.2s ease;
        }

        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(212, 175, 55, 0.6);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FiltroViviendas;