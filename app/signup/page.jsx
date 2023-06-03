import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center px-96 mx-28">
      <h2 className=" text-3xl font-bold mt-16">Sign up to this website</h2>
      <div className="w-full mt-12 mb-6">
        <label className="block text-sm text-gray-700">YOUR NAME</label>
        <input
          type="text"
          placeholder="Your name"
          className="py-2 border-b-2 border-zinc-700 outline-none w-full"
        ></input>
      </div>
      <div className="w-full mb-6">
        <label className="block text-sm text-gray-700">EMAIL ADDRESS</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          className="py-2 border-b-2 border-zinc-700 outline-none w-full"
        ></input>
      </div>
      <div className="w-full mb-6">
        <label className="block text-sm text-gray-700">PASSWORD</label>
        <input
          type="password"
          placeholder="Password"
          className="py-2 border-b-2 border-zinc-700 outline-none w-full"
        ></input>
      </div>
      <div className="w-full mb-12">
        <label className="block text-sm text-gray-700">PASSWORD CONFIRM</label>
        <input
          type="password"
          placeholder="Password Confirm"
          className="py-2 border-b-2 border-zinc-700 outline-none w-full"
        ></input>
      </div>
      <button className="button w-full">SIGN UP</button>
    </div>
  );
};

export default SignUp;
