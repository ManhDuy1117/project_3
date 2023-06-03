import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col items-center pt-32 px-64">
      <h2 className="text-3xl font-bold">Log into this website</h2>
      <div className="flex mt-12 items-center justify-between w-full">
        <form className="w-full mr-12">
          <label className="block text-sm text-gray-700">EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            className="py-2 border-b-2 border-zinc-700 outline-none w-full"
          ></input>
          <br />
          <br />
          <label className="block text-sm text-gray-700">PASSWORD</label>
          <input
            type="email"
            placeholder="Password"
            className="py-2 border-b-2 border-zinc-700 outline-none w-full"
          ></input>
          <br />
          <button className="button w-full mt-8">LOG IN</button>
        </form>
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-20 bg-gray-300 mb-4" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="w-0.5 h-20 bg-gray-300  mt-4" />
        </div>
        <div className="w-full ml-12">
          <div className=" border-1 border-black border-b-2 mb-4">
            <div className="relative">
              <button className=" w-full py-1 font-semibold">
                Continue with <br />
                Google
              </button>
              <FcGoogle className="absolute bottom-4 left-8" size={24} />
            </div>
          </div>
          <div className=" border-1 border-black border-b-2 mb-4">
            <div className="relative">
              <button className=" w-full py-1 font-semibold">
                Continue with <br />
                Apple
              </button>
              <BsApple className="absolute bottom-4 left-8" size={24} />
            </div>
          </div>
          <div className=" border-1 border-black border-b-2">
            <div className="relative">
              <button className=" w-full py-1 font-semibold">
                Continue with <br /> account
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link href={"/signup"} className="mt-16 font-semibold">
        CAN'T LOG IN? CREATE AN ACCOUNT
      </Link>
    </div>
  );
};

export default Login;
