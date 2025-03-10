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
      d="M7.496 3H16.505C18.987 3 21 5.012 21 7.496V16.505C21 18.987 18.988 21 16.504 21H7.496C5.013 21 3 18.988 3 16.504V7.496C3 5.013 5.012 3 7.496 3V3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.949 6.71304C16.763 6.71404 16.612 6.86504 16.612 7.05104C16.612 7.23704 16.764 7.38804 16.95 7.38804C17.136 7.38804 17.287 7.23704 17.287 7.05104C17.288 6.86404 17.136 6.71304 16.949 6.71304"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5456 9.45444C15.9515 10.8603 15.9515 13.1397 14.5456 14.5456C13.1397 15.9515 10.8603 15.9515 9.45444 14.5456C8.04855 13.1397 8.04855 10.8603 9.45444 9.45444C10.8603 8.04855 13.1397 8.04855 14.5456 9.45444"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'InstagramIcon'

export { ForwardRef as InstagramIcon }
