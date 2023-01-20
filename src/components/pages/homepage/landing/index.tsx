import Image from "next/image";
import goldSphereLanding from "public/image/goldSphere-landing.png";
import goldSphereFindEmail from "public/image/goldSphere-find-email.png";
import GlassBox from "components/common/GlassBox";

const Landing: React.FC = () => {
  return (
    <div className="w-full  h-[600px] rounded-[43px] flex flex-col items-center relative bg-[url('/image/banner-landing-1.png')] mb-40 bg-contain bg-no-repeat">
      <div className="flex flex-col items-center gap-y-1 mt-[73px]">
        <h1 className="font-bold text-5xl text-white-light">
          Search for anyone
        </h1>
        <p className="font-normal text-2xl text-blue-light w-[659px]">
          Searchillets you find professional email addresses in seconds and
          connect with the people that matter for your business.
        </p>
      </div>
      <div className="absolute -bottom-[110px]">
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
          src={goldSphereFindEmail}
          alt="goldSphere-find-email"
          className="-mt-[51px] ml-[33px]"
        />
      </div>
      <Image
        src={goldSphereLanding}
        alt="goldSphere-landing"
        className="absolute -left-[24px] top-[338px]"
      />
    </div>
  );
};

export default Landing;
