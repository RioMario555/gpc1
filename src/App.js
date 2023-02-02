import Sale from "./components/sale/Sale";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Product from "./components/product/Product";
import Clarin from "./components/carusel_2/Clarin";
import Inporm from "./components/inpormation/Inporm";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <Sale />
      <Product/>
      <Clarin/>
      <Inporm/>
    </div>
  );
}

export default App;
