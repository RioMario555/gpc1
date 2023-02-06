import './App.css';
import Sale from "./components/sale/Sale";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Product from "./components/product/Product";
import Clarin from "./components/carusel_2/Clarin";
import Inporm from "./components/inpormation/Inporm";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Carousel />
        <Sale />
        <Product />
        <Clarin />
        <Inporm />
        <Footer /> 
      </main>
      {/* */}
    </div>
  );
}

export default App;
