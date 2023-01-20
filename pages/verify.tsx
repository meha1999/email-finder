import AccessSearch from "../src/components/pages/domain/accessSearch";
import FlowChart from "../src/components/pages/domain/flowChart";
import VerifySearchBox from "../src/components/pages/verify/verifySearch";
import FQA from "../src/components/pages/homepage/fqa";
import SiteLayout from "components/layout";

const Verify: React.FC = () => {
  return (
    <SiteLayout>
      <VerifySearchBox />
      <AccessSearch />
      <FlowChart />
      <FQA />
    </SiteLayout>
  );
};

export default Verify;
