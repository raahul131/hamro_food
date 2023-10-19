import { Link } from "react-router-dom";

const SIgnUp = () => {
  return (
    <>
      <div>
        <div className="h-screen flex items-center justify-center">
          <div className="h-[400px] w-[300px]  rounded-lg mt-10">
            <div className="mt-4 text-center font-semibold text-lg underline">
              Create an account
            </div>
            <div className="items-center justify-center flex flex-col mt-4 mx-2">
              <input
                type="text"
                placeholder="Enter Your name"
                className="border-b-2 border-black p-1  w-full outline-none mt-6 px-2"
              />

              <input
                type="email"
                placeholder="Email"
                className="border-b-2 border-black p-1  w-full outline-none mt-6 px-2"
              />

              <input
                type="password"
                placeholder="Password"
                className="border-b-2 border-black p-1  w-full outline-none mt-6 px-2"
              />
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold p-2 rounded-lg m-10 w-full text-center cursor-pointer">
                SignUp
              </button>
              <Link to="/login">Back to <span className="text-orange-500 underline ">LogIn</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SIgnUp;
