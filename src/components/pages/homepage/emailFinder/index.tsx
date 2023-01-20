import Image from "next/image";
import GlassBox from "components/common/GlassBox";
import diamondEmailFinder from "public/image/rock-email-finder.svg";
import goldSphereEmailFinder from "public/image/goldSphere-email-finder.svg";
import searchIcon from "public/image/search-normal.svg";

const EmailFinder: React.FC = () => {
  return (
    <div className="w-full pb-48 flex justify-between items-center">
      <div className="w-fit relative">
        <Image
          src={goldSphereEmailFinder}
          alt="goldSphere"
          className="absolute top-52 -left-8 z-10"
        />
        <Image
          src={diamondEmailFinder}
          alt="goldSphere"
          className="absolute -top-11 -right-14"
        />
        <GlassBox>
          <div className="flex flex-col py-14 px-20">
            <h3 className="font-bold text-2xl text-blue-normal pl-4">
              Email Finder
            </h3>
            <p className="font-normal text-lg text-white-light pl-4">
              Find the verified email address of any professional.
            </p>
            <div className="w-full flex justify-between items-center mt-9 mb-4">
              <div className="w-2/5 h-16 bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="h-full w-4/5 bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
                />
              </div>
              <span className="font-bold text-2xl text-white-light">@</span>
              <div className="w-1/2 h-16 bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Johndoe@company.com"
                  className="h-full w-4/5 bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
                />
                <button className="flex justify-center items-center w-1/5 h-12 mr-2 bg-blue-light shadow-[0_15px_20px_rgba(1,130,241,0.3)] rounded-[49.5px] font-bold text-xl text-white-light hover:bg-[#3FA6FF]">
                  <Image src={searchIcon} alt="search" />
                </button>
              </div>
            </div>
            <p className="pl-4">
              Enter a full name and the domain name of the email address for
              example: Searchail.com
            </p>
          </div>
        </GlassBox>
      </div>
      <div className="w-1/2 pl-24">
        <h3 className="text-blue-normal font-bold text-2xl">EMAIL FINDER</h3>
        <h5 className="text-white-light font-bold text-2xl">
          Find the email address of any professional.
        </h5>
        <p className="pt-9 font-normal text-2xl text-grey-light text-justify">
          Find the email addresses of the professionals you want to contact one
          by one or in bulk. The Email Finder uses a large number of signals to
          find the proven or most probable email address of anyone in a fraction
          of a second.
        </p>
      </div>
    </div>
  );
};

export default EmailFinder;
