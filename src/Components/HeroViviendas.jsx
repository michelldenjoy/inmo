import React from "react";
import apartImage from "../assets/apart.jpg";

const HeroViviendas = () => {
  return (
    <section
      className="relative w-full h-[40vh] md:h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${apartImage})` }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="text-center text-white max-w-3xl animate-fade-in">
          <h1 className="text-2xl md:text-4xl font-serif font-semibold leading-snug tracking-wide">
            Apartamentos diseñados <br /> para tu comodidad y tranquilidad
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroViviendas;
