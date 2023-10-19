import HpLogo from "../assets/hplogo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const SignInSignUp = () => {
  async function logIn() {
    let userDetails = await window.miniapp.login("google");
    console.log(userDetails);
  }

  return (
    <>
      <div>
        <div className="h-screen flex items-center justify-center -my-12">
          {/* <div className="mt-4 text-center font-semibold text-lg underline">
              LogIn
            </div>
            <div className="items-center justify-center flex flex-col mt-4 mx-2">
              <input
                type="email"
                placeholder="Email"
                className="border-b-2 border-black p-1  w-full outline-none mt-6"
              />

              <input
                type="password"
                placeholder="Password"
                className="border-b-2 border-black p-1  w-full outline-none mt-6"
              />
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold p-2 rounded-lg m-10 w-full text-center cursor-pointer"
                onClick={logIn}
              >
                Login
              </button>
            </div>

            <div className="items-center justify-center flex">
              Don{`'`}t have an account?{" "}
              <Link to="/signup">
                <span className="text-orange-500 underline">Register</span>
              </Link>
            </div> */}

          <div>
            <img src={HpLogo} alt="" className="ml-3" />
            <h1 className="text-center text-lg font-bold underline">
              Log-In with
            </h1>
            <div className="justify-center items-center flex gap-5  my-3">
              <span
                className="text-4xl hover:scale-105 duration-300 transition-all"
                onClick={logIn}
              >
                <FcGoogle />
              </span>

              <span className="text-3xl text-blue-700 hover:scale-105 duration-300 transition-all">
                <BsFacebook />
              </span>
            </div>
            <div className="text-center">
              <span className="text-blue-600 underline cursor-pointer">
                Terms of Services
              </span>
              and
              <span className="text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInSignUp;
