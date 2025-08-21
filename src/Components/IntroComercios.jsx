import { motion } from "framer-motion";
import { Store, TrendingUp, MapPin, Zap } from "lucide-react";

const IntroComercios = () => {
  return (
    <div className="py-12 bg-elegant-white relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="max-w-5xl mx-auto px-6"
      >
        {/* Layout asimétrico moderno - espejo del de viviendas */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif font-thin text-elegant-black leading-none">
                Locales
              </h1>
              <motion.h2
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-gold-500 -mt-4 origin-left"
              >
                Estratégicos
              </motion.h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="space-y-6 max-w-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gold-500"></div>
                <span className="text-sm uppercase tracking-widest text-elegant-gray-600 font-medium">
                  Oportunidades Premium
                </span>
              </div>
              
              <p className="text-xl text-elegant-gray-700 leading-relaxed">
                Espacios comerciales cuidadosamente seleccionados en las ubicaciones más prometedoras. 
                Cada local está diseñado para potenciar el crecimiento y éxito de tu emprendimiento.
              </p>

              {/* Características destacadas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gold-600" />
                  </div>
                  <span className="text-sm font-medium text-elegant-gray-700">Ubicación privilegiada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-gold-600" />
                  </div>
                  <span className="text-sm font-medium text-elegant-gray-700">Alto potencial comercial</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1, type: "spring" }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-gold rounded-full flex items-center justify-center shadow-elegant-2xl">
                <Store className="w-20 h-20 text-elegant-white animate-float" />
              </div>
              
              {/* Elementos orbítales - diferentes al de viviendas */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <motion.div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold-300 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-gold-400 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* Anillo exterior decorativo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-gold-300 rounded-full"
                style={{ transform: 'scale(1.2)' }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Sección adicional de beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.5 }}
          className="mt-20 pt-12 border-t border-elegant-gray-200"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 rounded-xl">
                <Zap className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold text-elegant-black">Listos para operar</h3>
              <p className="text-sm text-elegant-gray-600">Espacios acondicionados y preparados para el inicio inmediato de tu actividad comercial.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.2 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold text-elegant-black">Alto tráfico</h3>
              <p className="text-sm text-elegant-gray-600">Ubicaciones con flujo constante de clientes potenciales y excelente visibilidad comercial.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.4 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 rounded-xl">
                <MapPin className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold text-elegant-black">Zonas en crecimiento</h3>
              <p className="text-sm text-elegant-gray-600">Sectores con proyección de desarrollo y valorización comercial a largo plazo.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroComercios;