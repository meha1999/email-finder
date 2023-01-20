import React from "react";
import logo from "../../../public/icons/logo.svg";
import Image from "next/image";
import FooterFacebook from "../../../public/icons/FooterFacebook";
import FooterGithub from "../../../public/icons/FooterGithub";
import FooterInstagram from "../../../public/icons/FooterInstagram";
import FooterTwitter from "../../../public/icons/FooterTwitter";

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-blue-darkest rounded-[45px] pt-20 px-16 pb-9">
        <div className="flex font-normal text-xl text-grey-light">
          <div className="flex flex-col w-1/4">
            <Image src={logo} alt="logo" />
            <div className="mt-16 flex flex-col gap-8">
              <span>Nuremburg , Germany</span>
              <span>Tel: 4521455630</span>
            </div>
          </div>
          <div className="flex flex-col w-1/4 gap-8">
            <span className="first:font-bold text-xl text-white-light py-2">
              PRODUCT
            </span>
            <span>Domain Search</span>
            <span>Email Finder</span>
            <span>Author Finder</span>
            <span>Email Verifier</span>
          </div>
          <div className="flex flex-col w-1/4 gap-8">
            <span className="first:font-bold text-xl text-white-light py-2">
              COMPANY
            </span>
            <span>About us</span>
            <span>Career</span>
            <span>Our Data</span>
          </div>
          <div className="flex flex-col w-1/4 gap-8">
            <span className="first:font-bold text-xl text-white-light py-2">
              SUPPORT
            </span>
            <span>Contact us</span>
            <span>Help Center</span>
          </div>
        </div>
        <div className="border-t-2 border-blue-normal mt-12 pt-8 flex justify-center items-center gap-6">
          <FooterTwitter />
          <FooterInstagram />
          <FooterFacebook />
          <FooterGithub />
        </div>
      </div>
      <div className="pt-4 pb-10 px-16 w-full flex justify-between font-normal text-base text-grey-normal">
        <span>© 2022-2023 All Rights Reserved.</span>
        <span>Terms • Privacy • Security • Do Not Sell My Info</span>
      </div>
    </div>
  );
};

export default Footer;
