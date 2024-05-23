import { forwardRef, Ref, SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const BackArrow = forwardRef((props: Props, ref: Ref<SVGSVGElement>) => (
  <svg
    data-testid="app-navigate-back"
    viewBox="0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M20.25 12H3.75M10.5 5.25 3.75 12l6.75 6.75"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

BackArrow.displayName = "BackArrow";

export default BackArrow;
