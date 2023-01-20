import { FC } from "react";
import style from "../../../styles/components/common/PlansPricing.module.css";
import { PRICING_PLANS } from "../../config/pricing-plans.config";
import PricingPlansList from "./PricingPlansList";

const PlansPricing: FC = (): JSX.Element => {
  return (
    <div className={style.plans_pricing}>
      <div className={style.title}>
        <span className={style.heading}>Plans & Pricing</span>
        <p className={style.description}>
          Select the right plan for your business. Upgrade or downgrade at any
          time.
        </p>
      </div>
      <div className={style.content}>
        <div className="pr-8 pt-8">
          <p className="font-normal text-xl text-white-light pr-1 pb-5">
            A subscription includes unlimited users who share common quotas.
          </p>
          <div className="w-full flex justify-between items-center pb-20">
            <div className="flex items-center gap-2  cursor-pointer">
              <div className="w-5 h-5 border-2 border-solid border-primary-light rounded-full flex justify-center items-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="w-[120px] h-11 flex justify-center items-center rounded-[49.5px] bg-warning-light">
                Monthly
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-5 h-5 border-2 border-solid border-grey-light rounded-full flex justify-center items-center">
                <div className="w-3 h-3 rounded-full"></div>
              </div>
              <div className="w-[132px] h-11 flex justify-end items-center rounded-[49.5px] bg-black-normal gap-2 p-1">
                <span className="font-bold text-xl text-grey-normal">
                  Yearly
                </span>
                <div className="w-12 h-9 rounded-[49.5px] bg-blue-light font-bold text-xs text-black-dark text-center">
                  Save 30%
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 font-normal text-xl text-grey-light">
            <span className="font-bold text-xl text-white-light">
              Email searches & verifications
            </span>
            <span>Monthly searches</span>
            <span>Monthly verifications</span>
            <span>Domain Search full results</span>
            <span>Domain Search downloads</span>
          </div>
          <div className="flex flex-col gap-4 font-normal text-xl text-grey-light mt-8">
            <span className="font-bold text-xl text-white-light">
              Campaigns
            </span>
            <span>Email accounts</span>
            <span>Attachments & images in emails</span>
            <span>Link tracking</span>
            <span>Custom tracking domain</span>
            <span>Recipients per campaign</span>
          </div>
          <div className="font-bold text-xl text-white-light mt-12">
            Unlimited users
          </div>
        </div>
        <PricingPlansList list={PRICING_PLANS} />
      </div>
    </div>
  );
};

export default PlansPricing;
