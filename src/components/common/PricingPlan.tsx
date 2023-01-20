import { FC } from "react";
import style from "../../../styles/components/common/PricingPlan.module.css";
import IPricingPlan from "../../config/pricing-plans.config";
import Check from "../../../public/icons/Check";
import Remove from "../../../public/icons/Remove";

const PricingPlan: FC<IPricingPlan> = ({
  plan,
  price,
  period,
  counts,
  allInclude,
  notInclude,
  isActive,
}): JSX.Element => {
  return (
    <div className={style.pricing_plan}>
      <div className={style.heading}>
        <span className={style.plan}>{plan}</span>
        <span className={style.price}>${price}</span>
        <span className={style.period}>/{period}</span>
        <button className={!isActive ? style.select_btn : style.current_btn}>
          {!isActive ? "Select" : "Current"}
        </button>
      </div>
      <div className={style.content}>
        <span>{counts[0]}</span>
        <span>{counts[1]}</span>
        <span>
          {allInclude ? (
            <Check />
          ) : notInclude?.includes("1") ? (
            <Remove />
          ) : (
            <Check />
          )}
        </span>
        <span>
          {allInclude ? (
            <Check />
          ) : notInclude?.includes("2") ? (
            <Remove />
          ) : (
            <Check />
          )}
        </span>
        <span>{counts[2]}</span>
        <span>
          {allInclude ? (
            <Check />
          ) : notInclude?.includes("3") ? (
            <Remove />
          ) : (
            <Check />
          )}
        </span>
        <span>
          {allInclude ? (
            <Check />
          ) : notInclude?.includes("4") ? (
            <Remove />
          ) : (
            <Check />
          )}
        </span>
        <span>
          {allInclude ? (
            <Check />
          ) : notInclude?.includes("5") ? (
            <Remove />
          ) : (
            <Check />
          )}
        </span>
        <span>{counts[3]}</span>
        <span>
          {allInclude ? (
            <Check />
          ) : notInclude?.includes("6") ? (
            <Remove />
          ) : (
            <Check />
          )}
        </span>
      </div>
    </div>
  );
};

export default PricingPlan;
