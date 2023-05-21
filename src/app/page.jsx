import { AcercaDeMi } from "@/components/AcercaDeMi";
import { Contacto } from "@/components/Contacto";
import { Estudios } from "@/components/Estudios";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Presentacion } from "@/components/Presentacion";

const Home = () => {
  return (
    <>
      <Navbar />
      <Presentacion />
      <AcercaDeMi />
      <Portfolio />
      <Estudios />
      <Contacto />
    </>
  );
};

export default Home;
