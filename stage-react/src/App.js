import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, addToWishlist, removeFromWishlist} from "./redux";
import {combineReducers} from "redux";

const Header = () => {
    const {wishlist} = useSelector(({products}) => products);
    const wishlistTotalPrice = wishlist.reduce((acc, el) => {
        return (acc += el.price);
    }, 0)
    return (
        <>
            <header style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h3>Our shop</h3>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <h3 style={{marginRight: '20px'}}>Cart: {0}</h3>
                    <h3 title={wishlistTotalPrice}>Wishlist: {wishlist.length}</h3>

                </div>
            </header>
            <hr/>
        </>
    )
};

const isInWishlist = (wishList, id) => !!wishList.find(el => el.id === id);

const Products = () => {
        const {wishlist} = useSelector(({products}) => products);

        const {products, isProductsLoading} = useSelector(({products}) => products);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchProducts({
                field: 'price',
                order: 'ASC'
            }));
        }, []);

        if (isProductsLoading) {
            return <div>Loading</div>
        }


        return (
            <div>
                {products.map(product => (
                    <div key={product.id} style={{
                        width: '60%',
                        margin: '20px auto'
                    }}>
                        <button onClick={() => {
                            isInWishlist(wishlist, product.id)
                                ? dispatch(removeFromWishlist(product.id))
                                : dispatch(addToWishlist(product.id));
                        }}>
                            {isInWishlist(wishlist, product.id)
                                ? 'remove from wishlist'
                                : 'add to wishlist'}
                        </button>

                        <h4>{product.title}
                            <br/>
                            Price: {product.price}</h4>

                        <p style={{
                            width: '60%'
                        }}>{product.description}</p>

                        <img style={{
                            width: '50%'
                        }} src={product.image} alt="test"/>
                    </div>))}
            </div>
        )
    }
;


export default function App() {
    return (
        <div>
            <Header/>
            <Products/>
        </div>
    );
}
;