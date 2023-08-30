import "./Cart.scss";

const Cart = () => {
  const items = [
    {
      id: 1,
      title: "Peaky blinder's Coat",
      img1: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1600",
      oldPrice: 52,
      desc: "Style: Jeans skirts can come in different styles, such as A-line, pencil, flared, wrap, or mini, depending on the cut and shape. Each style offers a unique look and can be suited for various occasions.",
      newPrice: 45,
      newItem: true,
    },
    {
      id: 2,
      title: "Red Woman's Coat",
      img1: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1906877/pexels-photo-1906877.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      oldPrice: 42,
      desc: "Jeans skirts may have details commonly found in jeans, such as rivets, pockets (front and back), belt loops, and a front fly with buttons or a zipper.",
      newPrice: 35,
      newItem: false,
    },
  ];

  return (
    <div className="c-cart">
      <div className="w-cart">
        <div className="title">
          <h3>Products in your cart</h3>
        </div>
        <div className="listItem">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img1} alt="" />
              <div className="details">
                <div className="itemTitle">{item.title}</div>
                <div className="itemDesc">{item.desc.substring(0, 100)}</div>
                <div className="itemPrice">3 x ${item.newPrice}</div>
              </div>
              <div className="delete">X</div>
            </div>
          ))}
        </div>
        <div className="subtotal">
          <span>Subtotal</span>
          <h3>$135.00</h3>
        </div>
        <div className="checkout">
          <span>Reset cart</span>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
