import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="">
      <Link to="/">
        <button className="absolute z-10 p-3 font-bold rounded-e-full bg-white">
          Go Home
        </button>
      </Link>
      <iframe
        className="w-screen min-h-screen"
        src="https://paystack.shop/mercy-touch"
      ></iframe>
    </div>
  );
};

export default Shop;
