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
      d="M9.116 14.187C5.562 14.655 3 15.96 3 17.5C3 19.433 7.029 21 12 21C16.971 21 21 19.433 21 17.5C21 15.96 18.438 14.655 14.884 14.187"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 7.833C18 4.612 15.314 2 12 2C8.686 2 6 4.612 6 7.833C6 12.208 12 17 12 17C12 17 18 12.208 18 7.833Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4142 6.58579C14.1953 7.36684 14.1953 8.63317 13.4142 9.41422C12.6332 10.1953 11.3668 10.1953 10.5858 9.41422C9.80474 8.63317 9.80474 7.36684 10.5858 6.58579C11.3668 5.80474 12.6332 5.80474 13.4142 6.58579"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'PinLocationIcon'

export { ForwardRef as PinLocationIcon }
