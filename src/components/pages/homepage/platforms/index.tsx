import Facebook from "public/icons/facebook";
import Google from "public/icons/google";
import Instagram from "public/icons/instagram";
import Telegram from "public/icons/telegram";
import Twitter from "public/icons/twitter";

const Platforms: React.FC = () => {
  const platfroms = [
    {
      name: "Google",
      icon: <Google />,
    },
    {
      name: "Tweeter",
      icon: <Twitter />,
    },
    {
      name: "Instagram",
      icon: <Instagram />,
    },
    {
      name: "Facebook",
      icon: <Facebook />,
    },
    {
      name: "Telegram",
      icon: <Telegram />,
    },
  ];

  return (
    <div className="flex mb-44">
      {platfroms.map((item, index) => (
        <div key={index} className="flex items-center">
          {!!index && (
            <div className="border-solid border-l-2 border-l-blue-light w-0 h-14 mx-12"></div>
          )}
          {item.icon}
          <div className="text-blue-normal pl-2.5 font-bold text-xl">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Platforms;
