import Footer from "components/common/Footer";
import SiteLayout from "components/layout";

const AboutUs: React.FC = () => {
  const values = [
    {
      title: "Move fast and help others move fast",
      text: "We push the boundaries to build a better product with short iteration cycles and efficient collaboration.",
    },
    {
      title: "Push for simplicity",
      text: "We believe the simplest products have the most significant impact. We continuously refine Hunter with this idea in mind.",
    },
    {
      title: "No ego: The best idea wins",
      text: "We're open to constructive debate to make the best decisions collectively. Ego is the enemy.",
    },
    {
      title: "Transparent by default",
      text: "We believe in a more open and transparent professional world. We promote this value in our company and our products.",
    },
    {
      title: "Have a disproportionate impact",
      text: "As a small team, we build simple and accessible products that bring value to millions of people globally.",
    },
    {
      title: "Care about our users' experience",
      text: "Every day, we take the experience of our users very seriously and don't let issues go unanswered.",
    },
  ];

  const statistics = [
    { title: "Web pages crawled every minute", count: "711K" },
    { title: "Websites sources of data", count: "76M" },
    { title: "Professional email addresses indexed", count: "107M" },
  ];

  return (
    <SiteLayout>
      <p className="text-white-light font-bold text-6xl pt-24 pb-4">
        {"Our mission"}
      </p>
      <span className="text-blue-light text-2xl pb-28 text-center">
        {
          "Searchail mission is to give professionals the power to create new connections with the people that matter."
        }
      </span>
      <p className="text-blue-normal font-bold text-4xl pb-4">
        {"The Team behind Searchail"}
      </p>
      <span className="text-white-light text-3xl pb-32 text-center w-3/4">
        {
          "We are a small group of people helping millions of professionals create new connections. We spend most of our time making our product more powerful and accessible. We are a remote team working from Europe, America, and Asia."
        }
      </span>
      <p className="text-blue-normal font-bold text-4xl pb-9">{"Our values"}</p>
      <div className="grid grid-cols-3 gap-28 pb-40">
        {values.map((item, index) => (
          <div key={index}>
            <p className="text-white-light font-bold text-2xl pb-6">
              {item.title}
            </p>
            <span className="text-grey-light text-2xl">{item.text}</span>
          </div>
        ))}
      </div>
      <p className="text-white-light font-bold text-6xl pb-4">{"Our data"}</p>
      <span className="text-blue-light text-2xl pb-16 text-center w-3/4">
        {
          "When you use Hunter, you access data from one unique source: the public web. Every day, we analyse millions of websites to index the most up to date business data."
        }
      </span>
      <p className="text-blue-normal font-bold text-4xl pb-4">
        {"Synchronized with the entire web"}
      </p>
      <span className="text-white-light text-3xl text-center pb-24 w-3/4">
        {
          "Every day, Hunter visits millions of web pages to find actionable business data. Like search engines, we constantly keep an index of the entire web and organize data that isnt in any other database."
        }
      </span>
      <div className="grid grid-cols-3 gap-40 mb-24">
        {statistics.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <p className="text-warning-light font-bold text-6xl pb-2">
              {item.count}
            </p>
            <span className="text-white-light text-2xl">{item.title}</span>
          </div>
        ))}
      </div>
    </SiteLayout>
  );
};

export default AboutUs;
