import { useContext } from "react";
  import { useLocation } from "react-router-dom";
  import { CartContext } from "../context/cart-context/cart-context";
  import { CartItem } from "../context/cart-context/cart-types";
  import SubTotalItem from "../components/subtotal-item/subtotal-item";
  import CheckoutCard from "../components/checkout-card/checkout-card";


  const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const params = useLocation();
    const secret: any = params.state;

    return (
      <div>
        <div className="container mx-auto mt-10">
          <CheckoutCard secret={secret.client_secret} />
        </div>
        <div className={(cartItems.length === 1 ? "" : "mobile:grid grid-cols-2 ") + "tablet:grid-cols-none"}>
          { cartItems.length ?
            cartItems.map((monster: CartItem) => <SubTotalItem key={monster.id} monster={monster} />)
            : <span className='flex justify-center items-center text-3xl font-bold'>Your Cart Is Empty</span>
          }
        </div>
      </div>
    )
  }
  export default Checkout;
