import Footer from "components/common/Footer";
import PlansPricing from "components/common/PlansPricing";
import SiteLayout from "components/layout";

const Prices: React.FC = () => {
  return (
    <SiteLayout>
      <PlansPricing />
      <Footer />
    </SiteLayout>
  );
};

export default Prices;
