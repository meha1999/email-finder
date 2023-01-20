
import Image from "next/image";
import GlassBox from "components/common/GlassBox";
import goldSphereFindEmail from "public/image/goldSphere-find-email.png";
import spec from "public/image/spec.svg";

const DomainSearchBox: React.FC = () => {
  return (
    <div className="w-full  h-[600px] rounded-[43px] flex flex-col items-center relative mb-28">
      <div className="flex flex-col items-center gap-y-1 mt-[73px]">
        <h1 className="font-bold text-5xl text-white-light">
          {"Search Emails With Domain"}
        </h1>
        <p className="font-normal text-2xl text-blue-light w-[659px]">
          {
            "Hunters most powerful email-finding tool. Find email addresses from any company name or website in seconds."
          }
        </p>
      </div>
      <div className="absolute -bottom-[110px]">
        <Image
          src={goldSphereFindEmail}
          alt="goldSphere-find-email"
          className="-mb-[108px] ml-[-35px]"
        />
        <GlassBox>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h3 className="font-bold text-4xl text-white-light my-14">
              Enter a domain to start For Free
            </h3>
            <div className="w-[710px] h-[90px] bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between mx-20">
              <input
                type="text"
                placeholder="Company.com"
                className="h-full w-[calc(100%-185px)] bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
              />
              <button className="mr-2 w-1/4 h-[70px] bg-blue-light shadow-[0_15px_20px_rgba(1,130,241,0.3)] rounded-[49.5px] font-bold text-2xl text-white-light hover:bg-[#3FA6FF]">
                Find email
              </button>
            </div>
            <p className="font-normal text-base text-blue-normal mt-3 mb-20">
              Enter a domain or company name to launch the search. For example,
              Searchail.com
            </p>
          </div>
        </GlassBox>
        <Image
          src={spec}
          alt="spec"
          className="-mt-[80px] ml-auto -mr-[70px]"
        />
      </div>
    </div>
  );
};

export default DomainSearchBox;
