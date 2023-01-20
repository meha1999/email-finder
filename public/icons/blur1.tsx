interface Blur1Props {
  className?: string;
}

const Blur1: React.FC<Blur1Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="448"
      height="794"
      viewBox="0 0 448 794"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_2310_1215)">
        <rect x="-46" y="300" width="194" height="194" rx="97" fill="#0172EA" />
      </g>
      <defs>
        <filter
          id="filter0_f_2310_1215"
          x="-346"
          y="0"
          width="794"
          height="794"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="150"
            result="effect1_foregroundBlur_2310_1215"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default Blur1;
