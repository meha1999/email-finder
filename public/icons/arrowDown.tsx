interface ArrowDownProps {
  className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.3867 12.6792L16.15 21.9159C15.0592 23.0067 13.2742 23.0067 12.1833 21.9159L2.94666 12.6792"
        stroke="white"
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default ArrowDown;
