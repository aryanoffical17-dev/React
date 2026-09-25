
function Card(props){
    return (
        <div className='Card'>

            <img
                src={props.image}
                alt={props.name}
            />

            <h2>{props.name}</h2>

            <p>{props.description}</p>

            <span className="rating">
                {props.rating} ★
            </span>

            <div className="price">
                {props.price}
                <span className="old-Price">
                    {props.oldPrice}
                </span>

                   <span className="discount">
                    {props.discount}
                </span>
            </div>

            <button>
                Add to Cart
            </button>
        </div>
    );
}

export default Card;