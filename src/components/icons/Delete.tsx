import { forwardRef, Ref, SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const Delete = forwardRef((props: Props, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
    ref={ref}
    {...props}
  >
    <path
      d="M20.25 5.25H3.75M9.75 9.75v6M14.25 9.75v6M18.75 5.25V19.5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V5.25M15.75 5.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

Delete.displayName = "Delete";

export default Delete;
