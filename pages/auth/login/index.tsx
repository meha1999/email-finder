import SiteLayout from "components/layout";
import GlassBox from "components/common/GlassBox";
import Image from "next/image";
import yellowCheck from "public/image/signup-yellow-check.svg";
import blueCheck from "public/image/signup-blue-check.svg";
import blueLock from "public/image/signup-lock-blue.svg";
import yellowLock from "public/image/signup-lock-yellow.svg";
import goldSphere from "public/image/goldSphere-signup.svg";

const HomePage: React.FC = () => {
  return (
    <SiteLayout>
      <div className="mb-28 mt-24">
        <div className="relative">
          <Image
            src={yellowCheck}
            alt="yellow-check"
            className="absolute -left-32 top-24"
          />
          <Image
            src={blueLock}
            alt="blue-lock"
            className="absolute -left-32 top-64 z-10"
          />
          <Image
            src={yellowLock}
            alt="yellow-lock"
            className="absolute -right-[148px] top-[349px]"
          />
          <Image
            src={blueCheck}
            alt="blue-check"
            className="absolute -right-[200px] top-[593px] z-10"
          />
          <Image
            src={goldSphere}
            alt="goldSphere"
            className="absolute left-28 -bottom-10"
          />
          <GlassBox>
            <div className="flex flex-col gap-20 my-24 justify-center items-center w-full h-full">
              <div className="flex w-full justify-center items-center gap-6 mx-36 ">
                <div className="w-2/5 h-16 bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between relative">
                  <label
                    htmlFor="firstName"
                    className="absolute -top-7 left-10"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="h-full w-full bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
                  />
                </div>
                <div className="w-2/5 h-16 bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between relative">
                  <label htmlFor="lastName" className="absolute -top-7 left-10">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="h-full w-full bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
                  />
                </div>
              </div>
              <div className="w-4/5 h-16 bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between relative">
                <label htmlFor="username" className="absolute -top-7 left-10">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="h-full w-full bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
                />
              </div>
              <div className="w-4/5 h-16 bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between relative">
                <label htmlFor="email" className="absolute -top-7 left-10">
                  Email address
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Your@email.com"
                  className="h-full w-full bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
                />
              </div>
              <div className="flex w-full justify-center items-center gap-6">
                <div className="w-2/5 h-16 bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between relative">
                  <label htmlFor="password" className="absolute -top-7 left-10">
                    Password
                  </label>
                  <input
                    id="password"
                    type="text"
                    placeholder="Password"
                    className="h-full w-full bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
                  />
                </div>
                <div className="w-2/5 h-16 bg-blue-normal border-2 border-blue-normal rounded-[49.5px] flex items-center justify-between relative">
                  <label
                    htmlFor="rePassword"
                    className="absolute -top-7 left-10"
                  >
                    Re - Password
                  </label>
                  <input
                    id="rePassword"
                    type="text"
                    placeholder="Retype Password"
                    className="h-full w-full bg-blue-normal rounded-[49.5px] outline-none px-10 font-normal text-xl text-blue-normal placeholder-primary"
                  />
                </div>
              </div>
              <button className="mr-2 w-4/5 h-[70px] bg-blue-light shadow-[0_15px_20px_rgba(1,130,241,0.3)] rounded-[49.5px] font-bold text-2xl text-white-light hover:bg-[#3FA6FF]">
                Sign up
              </button>
              <p className="mt-48 font-normal text-base text-grey-light">
                By signing up, you agree to our
                <span className="text-aegean-light cursor-pointer">
                  {" "}
                  Terms of Service{" "}
                </span>
                and our
                <span className="text-aegean-light cursor-pointer">
                  {" "}
                  Privacy Policy
                </span>
              </p>
            </div>
          </GlassBox>
        </div>
      </div>
    </SiteLayout>
  );
};

export default HomePage;
