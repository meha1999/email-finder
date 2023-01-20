import Image from "next/image";
import GlassBox from "components/common/GlassBox";
import Email from "public/icons/email";
import Globe from "public/icons/globe";
import Verify from "public/icons/verify";
import magnifier from "public/icons/magnifier.svg";
import logo from "public/icons/logo.svg";
import Blur3 from "public/icons/blur3";

const Services: React.FC = () => {
  const services = [
    { text: "Domain Search", icon: <Globe /> },
    { text: "Email Finder", icon: <Email /> },
    { text: "Email Verifier", icon: <Verify /> },
  ];

  return (
    <>
      <Blur3 className="mt-[-150px]  ml-auto " />
      <div className="flex justify-between items-center w-full mb-44 -mt-[850px]">
        <div className="w-1/2">
          <div className="w-full h-[335px] ">
            <GlassBox>
              <div className="flex px-16">
                <div className="flex flex-col items-center w-1/4">
                  <Image
                    src={magnifier}
                    alt="magnifier"
                    width={146}
                    height={146}
                  />
                  <Image src={logo} alt="logo" width={146} height={55} />
                </div>
                <div className="flex flex-col justify-center w-3/4 ">
                  <p className="text-blue-normal font-bold pb-3">
                    {"We believe in data transparency."}
                  </p>
                  <span className="text-white-light text-justify ">
                    {
                      "At Searchail we consider data to be most valuable when sourced and processed using transparent methods. Every single email address we collect and distribute in the Domain Search has public sources we indicate along with the discovery dates"
                    }
                  </span>
                </div>
              </div>
            </GlassBox>
          </div>
        </div>
        <div className="flex flex-col items-end w-1/2">
          {services.map((item, index) => (
            <div key={index} className="flex w-2/3 h-[180px] pb-12 ">
              <div className="relative mr-[-50px] z-10 mt-[-50px] w-28 h-28">
                {item.icon}
              </div>
              <GlassBox>
                <p className="text-3xl font-bold">{item.text}</p>
              </GlassBox>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
