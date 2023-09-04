import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const imageId = useParams().id;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_API_PIXABAY}&image_type=photo&id=${imageId}`
        );
        setProducts(res.data.hits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleMin = () => {
    quantity === 1 ? 1 : setQuantity((prev) => prev - 1);
  };

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="w-product">
      <div className="left">
        {products.map((item) => (
          <div key={item.id} className="previewImage">
            <img
              src={item.largeImageURL}
              alt="Images"
              onClick={() => setCurrentImage(0)}
              className={currentImage === 0 ? "active" : ""}
            />
            {item?.userImageURL ? (
              <img
                src={item.userImageURL}
                alt="Images"
                onClick={() => setCurrentImage(1)}
                className={currentImage === 1 ? "active" : ""}
              />
            ) : (
              ""
            )}
            <img
              src={item.largeImageURL}
              alt="Images"
              onClick={() => setCurrentImage(2)}
              className={currentImage === 2 ? "active" : ""}
            />
          </div>
        ))}
        {products.map((item) => (
          <img
            key={item.id}
            src={currentImage === 1 ? item.userImageURL : item.largeImageURL}
            className="mainImg"
          />
        ))}
      </div>
      <div className="right">
        {products.map((item) => (
          <div key={item.id}>
            <div className="title">
              <h2>{item.tags.toUpperCase()}</h2>
              <h1>${item.previewHeight}</h1>
            </div>
            <div className="desc">
              <span>
                Offer: Professional tutoring services in math and science
                subjects. Experienced tutor with a proven track record of
                improving student grades. Flexible scheduling and affordable
                rates Professional tutoring services in math and science
                subjects. Experienced tutor with a proven track record of
                improving student grades. Flexible scheduling and affordable
                rates
              </span>
            </div>

            <div className="quantity">
              <button onClick={handleMin}>-</button>
              <span>{quantity}</span>
              <button onClick={handlePlus}>+</button>
            </div>
            <div
              className="addToCart"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    name: item.tags,
                    img: item.largeImageURL,
                    quantity: quantity,
                    price: item.previewHeight,
                  })
                )
              }
            >
              <button>+ CART</button>
            </div>
          </div>
        ))}
        <div className="details">
          <span>Vendor : UNIQLO</span>
          <span>Product : Skirt</span>
          <span>Tag : Skirt, Woman, Jeans</span>
          <span>About</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
