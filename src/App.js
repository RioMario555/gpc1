import Sale from "./components/sale/Sale";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <Sale />
      <Product />
    </div>
  );
}

export default App;
