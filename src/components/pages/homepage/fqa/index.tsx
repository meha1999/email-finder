import ArrowDown from "public/icons/arrowDown";

const FQA: React.FC = () => {
  const fqa = [
    {
      title: "How can I find email addresses with Searchail Email Finder?",
      description: "",
    },
    {
      title: "How are you different from other email finder tools?",
      description: "",
    },
    { title: "Can I find prospects on LinkedIn?", description: "" },
    { title: "How accurate are the collected email results?", description: "" },
    {
      title: "Will I only find the name and the email of the prospect?",
      description: "",
    },
    { title: "Do you sell email lists?", description: "" },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-blue-normal font-bold text-2xl">
        {"Frequently Asked Questions"}
      </p>
      <span className="text-white-light font-bold text-2xl pb-10">
        {
          "Select the right plan for your business. Upgrade or downgrade at any time."
        }
      </span>
      {fqa.map((item, index) => (
        <div key={index} className="mt-3 w-10/12 last:mb-40">
          <div
            className="flex justify-between px-16 py-9 w-full rounded-[35px] bg-gradient-to-r from-[#091E2F] via-[#0A2034] to-[#092842]"
            style={{
              background:
                "linear-gradient(to right, #091E2F 2.31%,#0A2034 74.25%,#092842 97.77%)",
            }}
          >
            <p className="text-white-light font-normal text-2xl">
              {item.title}
            </p>
            <ArrowDown className="cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FQA;
