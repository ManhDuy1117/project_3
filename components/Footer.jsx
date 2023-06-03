import Image from "next/image";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className="px-72 pt-32 pb-24 flex flex-col items-center">
      <div className="flex justify-between w-full mb-8">
        <ul className="ul-footer">
          <li>Autocapture</li>
          <li>Data Govermance</li>
          <li>Virtual Events</li>
          <li>Virtual Users</li>
          <li>Behavioral Analytics</li>
          <li>Connect</li>
        </ul>
        <ul className="ul-footer">
          <li>Resources</li>
          <li>Blog</li>
          <li>Documents</li>
        </ul>
        <ul className="ul-footer">
          <li>Conmunity</li>
          <li>Conmunity Central</li>
          <li>Support</li>
          <li>Help</li>
          <li>My info</li>
        </ul>
        <ul className="ul-footer">
          <li>Company</li>
          <li>About us</li>
          <li>Partners</li>
          <li>Customers</li>
          <li>Contact us</li>
        </ul>
      </div>
      <Image src={"/assets/icons/logo.png"} alt="logo" width={30} height={30} />
      <p className="text-sm font-semibold mt-4">
        @ 2022 Elanguage. All rights reserved
      </p>
      <div className="flex mt-3 justify-evenly w-1/5">
        <GrFacebookOption size={20} />
        <GrTwitter size={20} />
        <GrInstagram size={20} />
      </div>
    </footer>
  );
};

export default Footer;
