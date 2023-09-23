import { Link } from "react-router-dom";

const SignInSignUp = () => {
  return (
    <>
      <div>
        <div className="h-screen flex items-center justify-center">
          <div className="h-[400px] w-[300px] border-black border-2 rounded-lg">
            <div className="mt-4 text-center font-semibold text-lg underline">
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
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold p-2 rounded-lg m-10 w-full text-center cursor-pointer">
                Login
              </button>
            </div>

            <div className="items-center justify-center flex">
              Don{`'`}t have an account?{" "}
              <Link to="/signup">
                <span className="text-orange-500 underline">Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInSignUp;
