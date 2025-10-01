import { motion } from "framer-motion";

const AboutUs = () => {
  const stats = [
    { number: "25", label: "Años de Experiencia" },
    { number: "2,500", label: "Familias Satisfechas" },
    { number: "95%", label: "Satisfacción Garantizada" },
    { number: "150", label: "Proyectos Entregados" }
  ];

  return (
    <section className="bg-elegant-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="w-16 h-px bg-gold-500 mx-auto mb-12"></div>
          <h2 className="font-serif text-5xl md:text-6xl text-elegant-black mb-6 font-light tracking-wide">
            Nuestra Historia
          </h2>
          <p className="font-serif text-gold-600 text-xl italic font-light">
            Construyendo confianza desde 1999
          </p>
        </motion.div>

        {/* Historia principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-2xl md:text-3xl text-elegant-gray-800 leading-relaxed font-light mb-12">
              <span className="text-gold-600 font-medium"> el hogar perfecto</span> y 
              <span className="text-gold-600 font-medium"> el futuro empresarial</span> de nuestros clientes.
            </p>
            
            <div className="w-24 h-px bg-gold-300 mx-auto my-16"></div>
            
            <blockquote className="font-serif text-xl md:text-2xl text-elegant-gray-700 italic font-light leading-relaxed">
              "No solo encontramos tu espacio. Somos arquitectos de nuevos capítulos 
              en la vida de las personas que confían en nosotros."
            </blockquote>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl text-gold-600 font-light mb-3">
                  {stat.number}
                </div>
                <div className="font-sans text-elegant-gray-700 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filosofía */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-elegant-black text-center mb-16 font-light">
              Nuestra Filosofía
            </h3>
            
            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="w-1 h-16 bg-gold-500 mx-auto mb-8"></div>
                <h4 className="font-serif text-xl text-elegant-black mb-4 font-medium">
                  Transparencia Absoluta
                </h4>
                <p className="font-sans text-elegant-gray-600 leading-relaxed font-light">
                  Cada proceso, cada detalle, cada paso es comunicado con claridad cristalina.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-1 h-16 bg-gold-500 mx-auto mb-8"></div>
                <h4 className="font-serif text-xl text-elegant-black mb-4 font-medium">
                  Compromiso Personal
                </h4>
                <p className="font-sans text-elegant-gray-600 leading-relaxed font-light">
                  Tu proyecto se convierte en nuestro proyecto. Tu éxito, nuestro éxito.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-1 h-16 bg-gold-500 mx-auto mb-8"></div>
                <h4 className="font-serif text-xl text-elegant-black mb-4 font-medium">
                  Excelencia Inquebrantable
                </h4>
                <p className="font-sans text-elegant-gray-600 leading-relaxed font-light">
                  25 años perfeccionando cada aspecto de la experiencia inmobiliaria.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Llamada final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center border-t border-gold-200 pt-16"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-elegant-black mb-8 font-light">
            Permitenos ser parte de tu historia
          </h3>
          <p className="font-sans text-elegant-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Con un cuarto de siglo de experiencia, sabemos que cada decisión inmobiliaria 
            es única y merece un acompañamiento excepcional.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center px-12 py-4 border border-gold-500 text-gold-600 font-sans font-medium tracking-wider uppercase text-sm hover:bg-gold-500 hover:text-elegant-white transition-all duration-300"
          >
            Conversemos
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-4 text-lg"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;