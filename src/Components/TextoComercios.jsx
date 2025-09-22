import { motion } from "framer-motion";

const TextoComercios = () => {
  return (
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
  viewport={{ once: true }}
  className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900  py-12 md:py-20 lg:py-28 px-6 overflow-hidden"
>

      {/* Fondo estrellado dinámico */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white opacity-70 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white opacity-60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-gold-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Luz dorada difusa */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-gold-400/20 via-gold-600/10 to-transparent rounded-full blur-3xl"
      ></motion.div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Línea dorada inicial */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "120px", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-12"
        ></motion.div>

        {/* Mensaje emocional principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold-300 text-sm md:text-base font-light tracking-[0.3em] uppercase mb-6 opacity-90">
            Tu sueño empresarial merece el mejor escenario
          </p>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8 tracking-wide">
            <span className="block font-light italic text-white/90 text-2xl md:text-3xl mb-4">
              Cada gran historia empresarial
            </span>
            <span className="bg-gradient-to-r from-gold-300 via-gold-200 to-gold-300 bg-clip-text text-transparent font-normal">
              comienza con la
            </span>
            <span className="block text-white font-light mt-2">
              decisión correcta
            </span>
          </h2>
        </motion.div>

        {/* Mensaje de confianza */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-light mb-8 tracking-wide">
            Sabemos que dar el paso para abrir tu negocio es una de las decisiones más importantes de tu vida. 
            <span className="text-gold-300 font-medium"> Por eso cada detalle importa.</span>
          </p>
          
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light mb-6">
            Nuestros espacios comerciales no son solo locales, son el fundamento donde construirás tu legado. 
            Ubicados estratégicamente, diseñados con visión de futuro, y respaldados por un equipo que entiende 
            <span className="text-white font-medium"> la importancia de tu inversión y tus sueños.</span>
          </p>
          </motion.div>

          <motion.div 
          
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-gold-200 text-lg md:text-xl font-light italic leading-relaxed"
          >
            Porque cuando confías tu proyecto en nosotros, nos convertimos en socios de tu éxito. 
            Cada día trabajamos para que tu decisión sea la mejor que hayas tomado.
          
        </motion.div>

        {/* Llamada a la acción emocional */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center px-12 py-4 border-2 border-gold-400/50 rounded-full bg-gradient-to-r from-gold-900/30 to-gold-800/30 backdrop-blur-sm hover:from-gold-800/40 hover:to-gold-700/40 transition-all duration-500 group cursor-pointer">
            <span className="text-gold-300 font-medium text-lg tracking-wide group-hover:text-gold-200 transition-colors duration-300">
              Tu futuro empresarial te está esperando
            </span>
          </div>
        </motion.div>

        {/* Elementos decorativos finales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex justify-center items-center space-x-8"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-gold-400/60 to-transparent"></div>
          </div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border border-gold-400/60 rotate-45 relative"
          >
            <div className="absolute inset-1 bg-gold-400/20 rotate-45"></div>
          </motion.div>
          
          <div className="flex items-center space-x-2">
            <div className="w-16 h-px bg-gradient-to-l from-gold-400/60 to-transparent"></div>
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Línea dorada final */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "200px", opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-12"
        ></motion.div>
      </div>

      {/* Efecto de brillo en los bordes */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
      ></motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
      ></motion.div>
    </motion.section>
  );
};

export default TextoComercios;