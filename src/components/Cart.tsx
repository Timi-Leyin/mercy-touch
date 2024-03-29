import { CloseCircle, ShoppingBag } from "iconsax-react";
import { Link } from "react-router-dom";

const Cart = ({
  isOpen = false,
  onClose,
}: {
  isOpen?: boolean;
  onClose: any;
}) => {
  if (isOpen) {
    return (
      <div className="fixed flex bg-black z-[20] justify-end items-end bg-opacity-60 backdrop-blur-md top-0 left-0 w-screen h-screen">
        <div className="bg-white relative w-[400px] p-7 rounded-md shadow h-[95vh] my-5 mx-10">
          <div
            onClick={onClose}
            className="close cursor-pointer scale-75 absolute top-[-15px] left-[-25px] bg-white rounded-full p-3"
          >
            <CloseCircle size={30} />
          </div>
          <h3 className="text-4xl flex items-center justify-between">
            Menu{" "}
            <div className="relative">
              <Link to="/shop">
                {" "}
                <ShoppingBag />
              </Link>
              <span className="absolute top-[-10px] right-[-10px] bg-orange-500 black rounded-full w-5 h-5 flex items-center justify-center text-white font-bold text-xs"></span>
            </div>
          </h3>

          <div className="mt-5">
          <ul className="text-2xl gap-10 flex flex-col mt-2 items-center">
        <li className="">
          <Link to="/">Home</Link>
        </li>

        <li className="">
          <Link to="/about">About Us</Link>
        </li>

        <li className="">
          <Link to="/shop">Shop</Link>
        </li>

        <li className="">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
          </div>

          {/* <div className="h-full flex items-center justify-center">
       <p className="flex items-center flex-col gap-2">
           <span className="text-4xl block my-2">👀</span> 
           <div className="text text-sm">CART IS EMPTY</div>
        </p>
       </div> */}
        </div>
      </div>
    );
  }
};

export default Cart;
