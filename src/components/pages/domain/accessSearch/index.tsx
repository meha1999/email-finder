const AccessSearch: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-blue-normal font-bold text-2xl pb-5">
        {"Reach out to any business."}
      </p>
      <span className="text-white-light font-bold text-2xl pb-11 text-center w-3/4">
        {
          "The Domain Search is perfect for quickly finding who to contact in a business. It lists publicly available email addresses with confidence scores, department filters, and detailed sources in just half a second."
        }
      </span>
      <button className="bg-blue-light hover:bg-blue-normal text-white-light font-bold py-5 px-14 rounded-full mb-40">
        {"Open the Domain Search"}
      </button>
    </div>
  );
};

export default AccessSearch;
