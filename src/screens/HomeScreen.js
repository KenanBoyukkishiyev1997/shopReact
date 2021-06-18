import products from '../data'
import Product from '../Components/ProductCard';
import './HomeScreen.css'

function HomeScreen() {
    return (
        <div className='products__wrapper'>
            {products.map(product => (<Product key={product._id} product={product} />))}
        </div>
    )
}

export default HomeScreen
