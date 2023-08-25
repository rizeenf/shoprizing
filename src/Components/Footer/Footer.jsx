import "./Footer.scss";
import paymentImg from "../../Assets/paymentGateway.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="top">
          <div className="section">
            <h2>Categories</h2>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Hijab</p>
            <p>Batik</p>
          </div>
          <div className="section">
            <h2>Links</h2>
            <p>FAQs</p>
            <p>Pages</p>
            <p>Contact</p>
            <p>Career</p>
            <p>Stores</p>
          </div>
          <div className="section">
            <h2>About</h2>
            <p>
              A shopping website's core values and goals revolve around
              providing a customer-centric approach with a wide selection of
              quality products at competitive prices.
            </p>
          </div>
          <div className="section">
            <h2>Contact</h2>
            <p>
              They prioritize security, transparency, and user-friendliness,
              aiming to offer reliable shipping and environmentally responsible
              practices. The website's focus on continuous improvement ensures
              it stays responsive to customer needs and industry trends.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h1>SHOPPRIZEING</h1>
            <span>Copyright 2023. All rights reserved.</span>
          </div>
          <div className="right">
            <img src={paymentImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
