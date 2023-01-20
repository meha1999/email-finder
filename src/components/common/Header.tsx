import ArrowDown from "icons/arrowDown";
import EnLang from "icons/EnLang";
import User from "icons/User";
import Image from "next/image";
import Link from "next/link";
import logo from "public/icons/logo.svg";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center pt-12 pb-3 pr-5">
      <div className="flex items-center gap-14 font-normal text-lg text-white-light">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="cursor-pointer" />
        </Link>
        <div className="flex items-center gap-2 cursor-pointer">
          <span>Product</span>
          <ArrowDown className="w-4 h-4 mt-1" />
        </div>
        <Link href={"/prices"} className="cursor-pointer">
          Pricing
        </Link>
        <Link href={"/domain"} className="cursor-pointer">
          Domain
        </Link>
        <Link href={"/verify"} className="cursor-pointer">
          Verify
        </Link>
        <Link href={"/about-us"} className="cursor-pointer">
          About Us
        </Link>
      </div>
      <div className="flex gap-7">
        <div className="flex items-center gap-2 font-bold text-lg text-white-light cursor-pointer">
          <EnLang />
          <span>EN</span>
          <ArrowDown className="w-4 h-4 mt-1" />
        </div>
        <div className="flex items-center w-[250px] h-[45px] p-[2px] bg-blue-light rounded-[49.5px] font-bold text-lg text-white-light">
          <div className="flex justify-center items-center gap-5 cursor-pointer w-1/2">
            <User />
            <span>Login</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer w-1/2 h-full bg-black-dark rounded-[49.5px] rounded-2 border-solid border-blue-light">
            <span>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
