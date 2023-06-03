import Image from "next/image";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
const Nav = () => {
  return (
    <nav className="flex justify-between px-20 pt-4 font-semibold">
      <Link href={"/"}>
        <Image
          src={"/assets/icons/logo.png"}
          alt="logo"
          width={30}
          height={30}
        />
      </Link>
      <div className="w-1/2 flex justify-evenly">
        <span className="flex ">
          Tutors <AiOutlineDown className="ml-1 mt-1.5" size={16} />
        </span>
        <span>Group classes</span>
        <span>Corporate training</span>
        <span>Become a tutor</span>
        <span>FAQ</span>
      </div>

      <Link href={"/login"} className="violet-button">
        Login
      </Link>
    </nav>
  );
};

export default Nav;
