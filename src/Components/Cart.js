import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart =() =>{
    // Subscibing to the small portion of the store
    const cartItems = useSelector((store)=>store.cart.items);

        // Subscibing to the whole portion of the store
    // const store = useSelector((store)=> store);
    // const cartItems = store.cart.items;

    const dispatch =useDispatch();
    const handleClearCart =() =>{
        dispatch(clearCart());
    }
    return <div className="text-center p-10 m-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>clearCart</button>
            {cartItems.length === 0 && (<h1>Cart is Empty. Add Items to the Cart!</h1>)}
            <ItemList items={cartItems}></ItemList>
        </div>
        </div>;
};

export default Cart;