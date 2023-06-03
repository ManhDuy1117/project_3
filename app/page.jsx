import Image from "next/image";
import React from "react";
import { MdOutlineEmail, MdPeopleAlt, MdVideoLibrary } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { TbDiamondFilled } from "react-icons/tb";
import { FaCertificate } from "react-icons/fa";
import Statistics from "@components/Statistics";

const Homepage = () => {
  return (
    <div className="px-16 pt-20 ">
      <section className="flex">
        <Image
          src={"/illustrations.svg"}
          width={550}
          height={550}
          className="mr-20"
        />
        <div className="mt-12">
          <h1 className="text-7xl font-bold">
            Effective english courses for kids and teenagers
          </h1>
          <p className="pr-20 text-lg mt-16 text-gray-500">
            With professional teachers, flexible learning schedules and courses
            for all levels you will speak confidentlty in no time
          </p>
          <div className="flex items-center mt-10 pr-6 relative right-4">
            <MdOutlineEmail
              className="relative left-9 text-gray-400"
              size={20}
            />
            <input
              placeholder={"Email"}
              className="py-2 pl-10 border-2 rounded-lg border-gray-300 w-full mr-3"
            />
            <button className="button">Get started</button>
          </div>
        </div>
      </section>
      <section className="pt-32 px-20 flex justify-center">
        <div className="w-1/2 mr-10 pr-40 mt-28">
          <h3 className="text-4xl font-bold">
            Learn English for everyday situations
          </h3>
          <p className="text-gray-500 mt-6">
            Through our rotation of international teachers, you’ll be exposed to
            a wide variety of accents, all contexts, expressions and cultures.
          </p>
          <button className="button mt-4">Start learning</button>
          <div className="border-dashed border-2 w-full mt-8"></div>
          <p className="text-gray-500 text-sm mt-8">
            “My time slot didn't work well, thanks to teacher's patience and
            tips, very helpful!”
          </p>
          <p className="mt-3">
            <strong>Leonardo DiCaprio,</strong>
            &nbsp; 17 years old
          </p>
        </div>
        <div className="border-8 border-white rounded-lg shadow-all">
          <div className="rounded-lg overflow-hidden relative">
            <div className="rounded-full w-48 h-48 circle"></div>
            <Image
              src={"/two-people.svg"}
              width={360}
              height={360}
              className="bg-violet-200"
            />
            <div className="text-center pt-14 pb-10 rounded-3xl relative bg-white bottom-4">
              <h4 className="text-2xl font-bold">Daily communication</h4>
              <div className="flex w-3/5 m-auto justify-between mt-2">
                <span>School</span>
                <span>Class</span>
                <span>Sports</span>
                <span>Friend</span>
              </div>
              <button className="button mt-4 flex items-center m-auto">
                <BsFillPlayFill className="mr-2" />
                Watch a video
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-56 px-32 flex justify-between">
        <Statistics
          icon={<TbDiamondFilled size={24} />}
          bigText={"97.95%"}
          content={"Completing rate"}
          grayText={"of all our courses"}
        />
        <Statistics
          icon={<MdPeopleAlt size={24} />}
          bigText={"37.4k"}
          content={"Happy students"}
          grayText={"on the platform"}
        />
        <Statistics
          icon={<MdVideoLibrary size={24} />}
          size={24}
          bigText={"5,000+"}
          content={"Video lessons"}
          grayText={"in our courses"}
        />
        <Statistics
          icon={<FaCertificate size={24} />}
          size={24}
          bigText={"40"}
          content={"Certificated professionals"}
          grayText={"in our team"}
        />
      </section>
    </div>
  );
};

export default Homepage;
