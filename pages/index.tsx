import PlansPricing from "components/common/PlansPricing";
import Footer from "components/common/Footer";
import Advantages from "components/pages/homepage/advantages";
import DomainSearchDescription from "components/pages/homepage/domainSearchDescription";
import EmailFinder from "components/pages/homepage/emailFinder";
import EmailVerifier from "components/pages/homepage/emailVerifier";
import FQA from "components/pages/homepage/fqa";
import Landing from "components/pages/homepage/landing";
import Platforms from "components/pages/homepage/platforms";
import Services from "components/pages/homepage/services";
import SiteLayout from "components/layout";

const HomePage: React.FC = () => {
  return (
    <SiteLayout>
      <Landing />
      <DomainSearchDescription />
      <EmailVerifier />
      <EmailFinder />
      <Platforms />
      <Services />
      <Advantages />
      <PlansPricing />
      <FQA />
    </SiteLayout>
  );
};

export default HomePage;
