import { forwardRef, Ref } from "react";

interface Props {
  height?: string | number;
  width?: string | number;
  className?: string;
}

const WhatsappIcon = forwardRef(
  (
    { width = "24", height = "24", className }: Props,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      viewBox="0 0 20 20"
      fill="#4FCE5D"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      width={width}
      height={height}
      className={className}
    >
      <path d="m0 20 1.36-4.97a10 10 0 1 1 3.61 3.61L0 20ZM6.4 5.3a.96.96 0 0 0-.67.34 2.73 2.73 0 0 0-.83 1.98c0 .49.13.97.33 1.41.4.9 1.08 1.86 1.97 2.75.22.2.42.42.65.62a9.45 9.45 0 0 0 3.84 2.05l.57.08h.55c.3-.02.58-.1.84-.24l.38-.22.13-.09c.13-.1.21-.17.32-.29.09-.08.16-.18.21-.3.08-.16.16-.47.2-.73.02-.2.01-.3 0-.38 0-.1-.09-.21-.18-.26l-.59-.26-1.4-.62a.5.5 0 0 0-.17-.04.48.48 0 0 0-.38.12s-.07.06-.8.93a.35.35 0 0 1-.36.13 1.42 1.42 0 0 1-.2-.06l-.25-.11a6.01 6.01 0 0 1-1.57-1c-.13-.11-.24-.23-.36-.35A6.3 6.3 0 0 1 7.6 9.5l-.06-.1a.92.92 0 0 1-.1-.2c-.04-.14.06-.26.06-.26l.35-.41c.1-.12.18-.25.26-.38.12-.19.16-.38.1-.53-.28-.69-.57-1.37-.87-2.04-.06-.14-.23-.23-.4-.25a4.44 4.44 0 0 0-.56-.01Z" />
    </svg>
  )
);

WhatsappIcon.displayName = "WhatsappIcon";

export default WhatsappIcon;
