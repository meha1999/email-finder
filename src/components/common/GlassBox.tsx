import { FC } from "react";
import style from "../../../styles/components/common/GlassBox.module.css";

interface GlassBoxProps {
  children: JSX.Element;
}

const GlassBox: FC<GlassBoxProps> = ({ children }): JSX.Element => {
  return (
    <div className={style.glass_box}>
      <div className={style.box}>
        <div className={style.noise}>{children}</div>
      </div>
    </div>
  );
};

export default GlassBox;
