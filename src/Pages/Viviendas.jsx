import HeroViviendas from "../Components/HeroViviendas";
import IntroViviendas from "../Components/IntroVivienda";
import FiltroViviendas from "../Components/FiltroViviendas";
import TextoViviendas from "../Components/TextoViviendas";
import Carousel from "../Components/Carousel";

const Viviendas = () => {
  
  return (
    <section className="pt-24 pb-20 px-4 bg-white">
      <Carousel />
      <IntroViviendas />
      <FiltroViviendas />
      <TextoViviendas />
    </section>
  );
};

export default Viviendas;
