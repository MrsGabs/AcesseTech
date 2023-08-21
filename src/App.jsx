import Banner from "./components/Banner";
import CollapsibleExample from "./components/NavbarBT";
import Valores from "./components/Valores";
import Sobre from "./components/Sobre";
import { BsArrowDownCircle } from "react-icons/bs";
import VLibras from "@djpfs/react-vlibras";
import FormBT from "./components/FormBT";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <VLibras forceOnload={true} />
      <CollapsibleExample />
      <main>
        <Banner />
        <BsArrowDownCircle className="arrow-banner" />
        <Valores />
        <Sobre />
        <FormBT />
      </main>
      <Footer />
    </>
  );
};

export default App;
