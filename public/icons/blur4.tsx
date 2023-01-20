interface Blur3Props {
  className?: string;
}

const Blur4: React.FC<Blur3Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="776"
      height="969"
      viewBox="0 0 776 969"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_2345_1917)">
        <rect
          x="107"
          y="300"
          width="369"
          height="369"
          rx="184.5"
          fill="#0172EA"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2345_1917"
          x="-193"
          y="0"
          width="969"
          height="969"
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
            result="effect1_foregroundBlur_2345_1917"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default Blur4;
