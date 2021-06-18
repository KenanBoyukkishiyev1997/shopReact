import { useContext } from 'react'
import './ProductCard.css'
import formatCurrency from 'format-currency'
import Rating from "./Rating";
import CartContext from '../context/cart/CartContext';

function ProductCard({ product }) {

    const { addToCart } = useContext(CartContext)

    const opts = { format: "%s%v", symbol: "€" }
    return (
        <div className='productCard_wrapper'>
            <div>
                <img className='productCard__img' src={product.image} alt="" />
                <h4>{product.name}</h4>
                <div className='productCard__price'>
                    <h5>{formatCurrency(`${product.price}`, opts)}</h5>
                </div>
                <div className='ProductCard__price'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </div>
                <button onClick={() => addToCart(product)} className="ProductCard__button">Add to Basket</button>
            </div>
        </div>
    )
}

export default ProductCard
