import { FC } from "react";
import style from "../../../styles/components/common/PricingPlansList.module.css";
import PricingPlan from "./PricingPlan";
import IPricingPlan from "../../config/pricing-plans.config";

interface PricingPlansListProps {
  list: Array<IPricingPlan>;
}

const PricingPlansList: FC<PricingPlansListProps> = ({ list }): JSX.Element => {
  return (
    <div className={style.pricing_plans_list}>
      {list.map((item: IPricingPlan, index: number) => (
        <PricingPlan
          key={index}
          plan={item.plan}
          price={item.price}
          period={item.period}
          counts={item.counts}
          allInclude={item.allInclude}
          notInclude={item.notInclude}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
};

export default PricingPlansList;
