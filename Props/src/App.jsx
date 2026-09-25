import Card from "./Components/Card";

import hpVictus from "./assets/laptop.webp"
import lenovoLegion from"./assets/lenovo.webp"
import macbook from "./assets/macbook.webp"

function App() {
  return (
   <div className="products">

            <Card
                image={hpVictus}
                name="HP Victus Gaming Laptop"
                description="Intel Core i5, 16GB RAM, 512GB SSD, RTX 3050 Graphics"
                rating="4.3"
                price="₹69,999"
                oldPrice="₹79,999"
                discount="12% off"
            />

            <Card
                image={macbook}
                name="Apple MacBook Air M3"
                description="Apple M3 Chip, 8GB RAM, 256GB SSD, 13.6-inch Retina Display"
                rating="4.7"
                price="₹89,999"
                oldPrice="₹99,999"
                discount="10% off"
            />

            <Card
                image={lenovoLegion}
                name="Lenovo Legion 5"
                description="AMD Ryzen 7, 16GB RAM, 512GB SSD, RTX 4060 Graphics"
                rating="4.5"
                price="₹1,09,999"
                oldPrice="₹1,19,999"
                discount="8% off"
            />

        </div>
  );
}

export default App