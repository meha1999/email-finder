import SiteLayout from "components/layout";
import AccessSearch from "../src/components/pages/domain/accessSearch";
import FlowChart from "../src/components/pages/domain/flowChart";
import DomainSearchBox from "../src/components/pages/domain/searchBox";
import FQA from "../src/components/pages/homepage/fqa";

const Domain: React.FC = () => {
  return (
    <SiteLayout>
      <DomainSearchBox />
      <AccessSearch />
      <FlowChart />
      <FQA />
    </SiteLayout>
  );
};

export default Domain;
