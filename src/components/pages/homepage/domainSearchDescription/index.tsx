import Blur1 from "public/icons/blur1";
import Steps from "public/icons/steps";

const DomainSearchDescription: React.FC = () => {
  return (
    <div className="pb-20 flex flex-col items-center">
      <Blur1 className="-mt-[250px] -ml-[200px] mr-auto" />
      <p className="text-blue-normal font-bold text-2xl -mt-[500px]">
        {"DOMAIN SEARCH"}
      </p>
      <p className="text-white-light pt-2 font-bold text-2xl">
        {"Get the email addresses behind any website."}
      </p>
      <span className="pt-6 text-grey-dark font-normal text-2xl text-center w-3/5">
        {
          "The Domain Search provides a list of the people working in a company with their name and email address, all found on the web. With 100+ million email addresses indexed, effective search filters and deliverability checks, its Searchail most powerful email-finding tool."
        }
      </span>
      <div className="pt-10 flex">
        <div className="flex items-center">
          <Steps />
          <span className="ml-[-30px] font-bold text-2xl text-white-light">
            1
          </span>
          <p className="text-warning-light font-bold text-2xl pl-6">
            {"Sign Up"}
          </p>
          <div className="border-dotted border-t-2 border-t-warning-light w-36 h-0 ml-3.5"></div>
        </div>
        <div className="flex items-center">
          <Steps />
          <span className="ml-[-30px] font-bold text-2xl text-white-light">
            2
          </span>
          <p className="text-warning-light font-bold text-2xl pl-6">
            {"Find Emails"}
          </p>
          <div className="border-dotted border-t-2 border-t-warning-light w-36 h-0 ml-3.5"></div>
        </div>
        <div className="flex items-center">
          <Steps />
          <span className="ml-[-30px] font-bold text-2xl text-white-light">
            3
          </span>
          <p className="text-warning-light font-bold text-2xl pl-6">
            {"Result"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainSearchDescription;
