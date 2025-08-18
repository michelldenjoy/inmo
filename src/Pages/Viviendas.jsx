import HeroViviendas from "../components/HeroViviendas";
import IntroViviendas from "../Components/IntroVivienda";
import FiltroViviendas from "../Components/FiltroViviendas";
import TextoViviendas from "../Components/TextoViviendas";

const Viviendas = () => {
  
  return (
    <section className="pt-24 pb-20 px-4 bg-white">
      <HeroViviendas />
      <IntroViviendas />
      <FiltroViviendas />
      <TextoViviendas />
    </section>
  );
};

export default Viviendas;
