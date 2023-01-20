import { useState } from "react";
import Dashboard from "public/image/dashboard";
import Blur4 from "public/icons/blur4";

const Advantages: React.FC = () => {
  const [selected, setSelected] = useState<number>(1);
  const advantages = [
    {
      title: "Download results",
      description:
        "Export the email addresses that match your criteria in a single CSV file with everything you need.",
    },
    {
      title: "Advanced filters",
      description:
        "Find exactly what you need from your initial search by filtering by types, departments, and data.",
    },
    {
      title: "Find someone",
      description:
        "Type a name and get the proven or most likely email address of this person.",
    },
    {
      title: "Status & Validation",
      description:
        "Find verified email addresses or get a confidence score in percentage.",
    },
    {
      title: "Save as lead & Favorites",
      description:
        "Type a name and get the proven or most likely email address of this person.",
    },
    {
      title: "Sources",
      description:
        "Every email address has public sources you can check along with the last discovery dates.",
    },
  ];
  return (
    <>
      <Blur4 className="-mt-[350px] -ml-[200px] mr-auto" />
      <div className="flex items-start justify-between w-full mb-44 -mt-[600px]">
        <Dashboard selected={selected} onClick={setSelected} />
        <div className="flex flex-col items-center">
          {advantages.map((item, key) => (
            <div key={key} className="mb-7 w-9/12">
              <div className="flex items-center pb-2.5">
                <div
                  className={`w-4 h-4 rounded-full ${
                    key + 1 !== selected ? "bg-grey-dark" : "bg-warning-light"
                  } `}
                ></div>
                <p
                  className={`font-bold text-xl pl-3 ${
                    key + 1 !== selected ? "text-blue-dark" : "text-blue-normal"
                  }`}
                >
                  {item.title}
                </p>
              </div>
              <span
                className={`font-normal text-xl ${
                  key + 1 !== selected ? "text-grey-dark" : ""
                }`}
              >
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Advantages;
