import Logo from "../assets/logop.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
const NavBar = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between shadow-md px-4 h-16 bg-white">
          <div className="cursor-pointer">
            <img src={Logo} alt="logo" className="h-12 w-12" />
          </div>
          <div>
            <ul className="flex space-x-5 md:space-x-10 text-lg font-medium items-center">
              <li className="hover:text-orange-500 cursor-pointer">Home</li>
              <li className="hover:text-orange-500 cursor-pointer text-2xl">
                <span>
                  <TbDiscount2 />
                </span>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                SigIn/SignUp
              </li>
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
