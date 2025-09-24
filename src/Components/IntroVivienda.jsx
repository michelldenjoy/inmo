import { motion } from "framer-motion";
import { Sparkles, Star, Crown, Home, ArrowRight } from "lucide-react";

const IntroVivienda = () => {
  return (
    <div className="py-20 bg-elegant-white relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="max-w-5xl mx-auto px-6"
      >
        {/* Layout asimétrico moderno */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif font-thin text-elegant-black leading-none">
                Espacios
              </h1>
              <motion.h2
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-gold-500 -mt-1 ml-9 origin-left"
              >
                Exclusivos
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
                  Portfolio Selecto
                </span>
              </div>

              <p className="text-xl text-elegant-gray-700 leading-relaxed">
                Descubre nuestros apartamentos amueblados, listos para ti y tu
                familia. Contamos con apartamentos modernos,funcionales y bien
                ubicados, ideales para quienes buscan calidad de vida y
                estabilidad.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1, type: "spring" }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              {/* Círculo principal */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-gold bg-from rounded-full flex items-center justify-center shadow-elegant-2xl">
                <Home className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-elegant-white animate-float" />
              </div>

              {/* Anillo giratorio */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-gold-300 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default IntroVivienda;

// // OPCIÓN 2: MODERNA CON EFECTOS VISUALES IMPACTANTES
// const IntroViviendas2 = () => {
//   return (
//     <div className="relative py-24 bg-gradient-dark-elegant overflow-hidden">
//       {/* Partículas doradas animadas */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-gold-400 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0, 1, 0],
//               scale: [0, 1, 0]
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         className="max-w-6xl mx-auto text-center px-6 relative z-10"
//       >
//         {/* Badge premium */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, type: "spring" }}
//           className="mb-8"
//         >
//           <div className="inline-flex items-center gap-3 bg-gold-500/10 backdrop-blur-sm border border-gold-500/20 rounded-full px-6 py-3">
//             <Star className="w-5 h-5 text-gold-400 animate-pulse" />
//             <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">
//               Colección Premium
//             </span>
//             <Star className="w-5 h-5 text-gold-400 animate-pulse" />
//           </div>
//         </motion.div>

//         <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-elegant-white mb-8 leading-tight">
//           <motion.span
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="block"
//           >
//             Viviendas
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.8 }}
//             className="block bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent font-bold"
//           >
//             Extraordinarias
//           </motion.span>
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 1.5 }}
//           className="space-y-8"
//         >
//           <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             Donde el <span className="text-gold-400 font-semibold">lujo</span> se encuentra con la
//             <span className="text-gold-400 font-semibold"> funcionalidad</span>,
//             y cada espacio cuenta una historia de elegancia.
//           </p>

//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8, delay: 2.2 }}
//             className="inline-flex items-center gap-2 text-gold-400 font-medium"
//           >
//             <span>Descubre tu nuevo hogar</span>
//             <ArrowRight className="w-5 h-5 animate-bounce" />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// // OPCIÓN 3: MINIMALISTA PERO IMPACTANTE
// const IntroViviendas3 = () => {
//   return (
//     <div className="py-32 bg-elegant-white relative">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         className="max-w-5xl mx-auto px-6"
//       >
//         {/* Layout asimétrico moderno */}
//         <div className="grid lg:grid-cols-12 gap-12 items-center">
//           <div className="lg:col-span-8 space-y-8">
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1.2, delay: 0.3 }}
//             >
//               <h1 className="text-6xl md:text-8xl font-serif font-thin text-elegant-black leading-none">
//                 Espacios
//               </h1>
//               <motion.h2
//                 initial={{ opacity: 0, scaleX: 0 }}
//                 animate={{ opacity: 1, scaleX: 1 }}
//                 transition={{ duration: 1.5, delay: 0.8 }}
//                 className="text-4xl md:text-6xl font-bold text-gold-500 -mt-4 origin-left"
//               >
//                 Exclusivos
//               </motion.h2>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.5 }}
//               className="space-y-6 max-w-2xl"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-px bg-gold-500"></div>
//                 <span className="text-sm uppercase tracking-widest text-elegant-gray-600 font-medium">
//                   Portfolio Selecto
//                 </span>
//               </div>

//               <p className="text-xl text-elegant-gray-700 leading-relaxed">
//                 Residencias meticulosamente curadas que redefinen el concepto de hogar.
//                 Cada espacio refleja una búsqueda incansable de la perfección en diseño,
//                 comodidad y ubicación.
//               </p>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 1.5, delay: 1, type: "spring" }}
//             className="lg:col-span-4 flex justify-center"
//           >
//             <div className="relative">
//               <div className="w-48 h-48 bg-gradient-gold rounded-full flex items-center justify-center shadow-elegant-2xl">
//                 <Home className="w-20 h-20 text-elegant-white animate-float" />
//               </div>
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 border-2 border-dashed border-gold-300 rounded-full"
//               ></motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // OPCIÓN 4: CINEMATOGRÁFICA CON TEXTO GRANDE
// const IntroViviendas4 = () => {
//   return (
//     <div className="min-h-[70vh] flex items-center justify-center bg-gradient-elegant relative overflow-hidden">
//       {/* Líneas decorativas de fondo */}
//       <motion.div
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 2, delay: 1 }}
//         className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"
//       />
//       <motion.div
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 2, delay: 1.5 }}
//         className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"
//       />

//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 3 }}
//         >
//           {/* Texto cinematográfico gigante */}
//           <motion.h1
//             className="text-7xl md:text-9xl lg:text-[12rem] font-serif font-light text-elegant-black leading-none tracking-tight"
//             initial={{ opacity: 0, letterSpacing: "0.5em" }}
//             animate={{ opacity: 1, letterSpacing: "normal" }}
//             transition={{ duration: 2, delay: 0.5 }}
//           >
//             LUJO
//           </motion.h1>

//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "100%" }}
//             transition={{ duration: 2, delay: 2 }}
//             className="h-2 bg-gradient-gold mx-auto my-8 max-w-md shadow-elegant"
//           />

//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5, delay: 2.5 }}
//             className="text-2xl md:text-4xl font-light text-elegant-gray-700 tracking-wide"
//           >
//             redefinido en cada detalle
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 3.5 }}
//             className="text-lg text-elegant-gray-600 mt-12 max-w-2xl mx-auto"
//           >
//             Residencias que trascienden lo ordinario. Espacios donde la sofisticación
//             y el confort se fusionan para crear experiencias habitacionales únicas.
//           </motion.p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export { IntroViviendas1, IntroViviendas2, IntroViviendas3, IntroViviendas4 };
