import Carousel from "../Components/Carousel";
import IntroComercios from "../Components/IntroComercios";
import TextoComercios from "../Components/TextoComercios";
import FiltroComercios from "../Components/FiltroComercios";

const Comercios = () => {
  return (
    <section className="pt-24 pb-20 px-4 bg-white">
      <Carousel />
      <IntroComercios />
      <FiltroComercios /> 
      <div className="mt-16">
        <TextoComercios />
      </div>
    </section>
  );
};

export default Comercios;
