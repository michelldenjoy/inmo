import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const IntroComercios = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const textWrapper = textRef.current;
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='inline-block opacity-0'>$&</span>"
      );

      animate(textWrapper.querySelectorAll("span"), {
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeOutExpo",
        duration: 750,
        delay: stagger(50),
      });
      
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto text-center mb-20 px-6">
      <p className="text-lg mt-10 md:text-xl font-light leading-relaxed tracking-wide">
        <span
          ref={textRef}
          className="block text-2xl md:text-4xl font-serif italic font-medium text-gold mb-4"
        >
          Encuentra el espacio ideal para hacer crecer tu emprendimiento.
        </span>
        Nuestros locales están ubicados en zonas estratégicas, ideales para todo
        tipo de negocios.
      </p>
    </div>
  );
};

export default IntroComercios;
