import { AcercaDeMi } from "@/components/AcercaDeMi";
import { Contacto } from "@/components/Contacto";
import { Estudios } from "@/components/Estudios";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Presentacion } from "@/components/Presentacion";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Daniel González Tormo</title>
      </Head>
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
