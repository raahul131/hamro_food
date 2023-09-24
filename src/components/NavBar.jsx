import Logo from "../assets/logop.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between shadow-md px-4 h-16 bg-white">
          <Link to="/" className="cursor-pointer">
            <img src={Logo} alt="logo" className="h-12 w-12" />
          </Link>
          <div>
            <ul className="flex space-x-5 md:space-x-10 text-lg font-medium items-center">
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/">Home</Link>
              </li>

              <li className="hover:text-orange-500 cursor-pointer text-2xl">
                <Link to="/offers">
                  <span>
                    <TbDiscount2 />
                  </span>
                </Link>
              </li>

              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
              <Link to="/login">
                <li className="hover:text-orange-500 cursor-pointer">
                  LogIn
                </li>
              </Link>
              <li className="hover:text-orange-500 cursor-pointer text-2xl">
                <span className="">
                  <AiOutlineShoppingCart />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
