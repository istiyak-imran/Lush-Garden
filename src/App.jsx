import About from "./assets/components/about";
import Banner from "./assets/components/banner";
import Blog from "./assets/components/blog";
import CopyRight from "./assets/components/copyRight";
import Footer from "./assets/components/footer";
import Gallary from "./assets/components/gallary";
import InputEmail from "./assets/components/inputEmail";
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
    <InputEmail/>
    <Blog/>
    <Footer/>
    <CopyRight/>

    </>
  );
};

export default App
