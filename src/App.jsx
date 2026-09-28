import About from "./assets/components/about";
import Banner from "./assets/components/banner";
import Email from "./assets/components/email";
import Gallary from "./assets/components/gallary";
import Nav from "./assets/components/Nav";
import Offer from "./assets/components/offer";
import Production from "./assets/components/production";
import Text from "./assets/components/text";
import Tree from "./assets/components/tree";


const App = () => {
  return (
    <>
    <Nav />
    <Banner/>
    <Text/>
    <Tree/>
    <Offer/>
    <Production/>
    <Gallary/>
    <About/>
    <Email/>

    </>
  );
};

export default App
