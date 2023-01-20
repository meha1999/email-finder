import Image from "next/image";
import goldSphereEmailVerifier from "public/image/goldSphere-email-verifier.svg";
import GlassBox from "components/common/GlassBox";

const EmailVerifier: React.FC = () => {
  return (
    <div className="w-full pb-32 flex justify-between items-center">
      <div className="w-1/2 pr-24">
        <h3 className="text-blue-normal font-bold text-2xl">EMAIL VERIFIER</h3>
        <h5 className="text-white-light font-bold text-2xl">
          Verify the deliverability of any email address.
        </h5>
        <p className="pt-9 font-normal text-2xl text-grey-light text-justify">
          {
            "The Email Verifier does a complete check of the email address so you can send your emails with confidence. As it uses Hunter's unique data set, the Email Verifier can return a result even where other standard verification tools would fail."
          }
        </p>
      </div>
      <div className="w-fit">
        <Image
          src={goldSphereEmailVerifier}
          alt="goldSphere"
          className="ml-auto -mb-24 -mr-9"
        />
        <GlassBox>
          <div className="flex flex-col py-14 px-20">
            <h3 className="font-bold text-2xl text-blue-normal pl-4">
              Email Verifier
            </h3>
            <p className="font-normal text-lg text-white-light pl-4">
              Verify email address validity with the most complete email checker
            </p>
            <div className="w-full h-16 mt-9 mb-4 bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between">
              <input
                type="text"
                placeholder="Johndoe@company.com"
                className="h-full w-4/5 bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
              />
              <button className="w-1/5 h-12 mr-2 bg-blue-light shadow-[0_15px_20px_rgba(1,130,241,0.3)] rounded-[49.5px] font-bold text-xl text-white-light hover:bg-[#3FA6FF]">
                Verify
              </button>
            </div>
            <p className="pl-4">
              Enter an email address to verify its validity.
            </p>
          </div>
        </GlassBox>
      </div>
    </div>
  );
};

export default EmailVerifier;
