import type { Ref, SVGProps } from 'react'
import { forwardRef } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.204 5.76205C16.558 4.11505 14.369 3.20705 12.037 3.20605C7.22999 3.20605 3.31899 7.11505 3.31799 11.9201C3.31599 13.4491 3.71699 14.9521 4.48099 16.2771L3.24399 20.7931L7.86599 19.5811C9.14499 20.2771 10.577 20.6421 12.033 20.6421H12.037C16.842 20.6421 20.753 16.7321 20.755 11.9271C20.756 9.59905 19.85 7.41005 18.204 5.76205Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.095 13.56L13.501 13.157C13.874 12.787 14.464 12.74 14.894 13.042C15.31 13.334 15.686 13.596 16.036 13.84C16.592 14.226 16.659 15.018 16.18 15.496L15.821 15.855"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.14502 8.17902L8.50402 7.82002C8.98202 7.34202 9.77402 7.40902 10.16 7.96402C10.403 8.31402 10.665 8.69002 10.958 9.10602C11.26 9.53602 11.214 10.126 10.843 10.499L10.44 10.905"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.821 15.855C14.34 17.329 11.851 16.077 9.88602 14.111"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.88801 14.1141C7.92301 12.1481 6.67101 9.66008 8.14501 8.17908"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.44 10.905C10.759 11.408 11.168 11.906 11.63 12.368L11.632 12.37C12.094 12.832 12.592 13.241 13.095 13.56"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'WhatsappIcon'

export { ForwardRef as WhatsappIcon }
