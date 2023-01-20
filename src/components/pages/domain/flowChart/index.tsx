import Image from "next/image";
import webSearch from "public/image/webSearch.svg";
import dashedArrow from "public/image/dashedArrow.svg";
import EmailPafe from "public/icons/emailPafe";
import GlassBox from "components/common/GlassBox";

const FlowChart: React.FC = () => {
  return (
    <div className="w-full flex  items-center mb-48">
      <div className="w-5/12">
        <GlassBox>
          <div className="flex px-4">
            <div className="flex flex-col items-center justify-center w-1/4">
              <Image src={webSearch} alt="magnifier" width={146} height={146} />
            </div>
            <div className="flex flex-col justify-center w-3/4 px-4">
              <span className="text-white-light text-justify py-16">
                {
                  "Searchail most powerful email-finding tool. Find email addresses from any company name or website in seconds."
                }
              </span>
            </div>
          </div>
        </GlassBox>
      </div>
      <div className="w-2/12">
        <Image src={dashedArrow} alt="magnifier"  height={146} />
      </div>
      <div className="w-4/12">
        <GlassBox>
          <div className="flex px-4">
            <div className="flex items-center justify-center w-1/4">
              <EmailPafe className="w-32 h-32" />
            </div>
            <div className="flex flex-col justify-center w-3/4 ">
              <span className="text-white-light text-justify py-16">
                {"We have found millions of emails for thousands of users"}
              </span>
            </div>
          </div>
        </GlassBox>
      </div>
    </div>
  );
};

export default FlowChart;
