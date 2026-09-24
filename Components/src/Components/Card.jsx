import laptop from "../assets/laptop.webp"

function Card(){
    return <div className="Card">

    <img 
        src={laptop} 
        alt="HP Victus Laptop"
    />

    <h2>HP Victus Gaming Laptop</h2>

    <p>
        Intel Core i5, 16GB RAM, 512GB SSD,
        RTX 3050 Graphics
    </p>

    <span className="rating">4.3 ★</span>

    <div className="price">
        ₹69,999

        <span className="old-price">
            ₹79,999
        </span>

        <span className="discount">
            12% off
        </span>
    </div>

    <button>
        Add to Cart
    </button>

</div>
    
}

export default Card