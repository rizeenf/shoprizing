import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { removeFromCart, resetCart } from "../../Redux/cartSlice";
import { useState } from "react";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const handleTotalCart = () => {
    let totalCart = 0;

    cart.forEach((item) => {
      totalCart += item.price * item.quantity;
    });

    return totalCart;
  };

  return (
    <div className="c-cart">
      <div className="w-cart">
        <div className="title">
          <h3>Products in your cart</h3>
        </div>
        <div className="listItem">
          {cart.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="details">
                <div className="itemTitle">{item.name.toUpperCase()}</div>
                <div className="itemDesc">
                  {item.name}
                  {item.name}
                </div>
                <div className="itemPrice">
                  {item.quantity} x ${item.price}
                </div>
              </div>
              <div
                className="delete"
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
              >
                X
              </div>
            </div>
          ))}
        </div>
        <div className="subtotal">
          <span>Subtotal</span>
          <h3>${handleTotalCart()}</h3>
        </div>
        <div className="checkout">
          <span onClick={() => dispatch(resetCart())}>Reset cart</span>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
