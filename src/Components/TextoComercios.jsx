import { motion } from "framer-motion";

const TextoComercios = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white py-20 px-6 border-t border-gray-200"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6">
          <hr className="w-full mx-auto border-t-2 border-gold mb-6" />
          <h2 className="text-2xl md:text-3xl font-serif italic text-gray-900 leading-snug">
            Nuestros locales comerciales han sido diseñados <br className="hidden md:block" />
            pensando en funcionalidad, visibilidad y confort.
          </h2>
        </div>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
          Ubicados en una zona clave para el desarrollo de negocios, cada espacio ofrece el entorno ideal
          para crecer con solidez y con una administración comprometida a brindarte un servicio
          personalizado, ágil y transparente desde el primer día.
        </p>
      </div>
    </motion.section>
  );
};

export default TextoComercios;
