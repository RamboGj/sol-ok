import type { Ref, SVGProps } from 'react'
import { forwardRef } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <circle
      cx="11.0586"
      cy="11.0586"
      r="7.06194"
      stroke="currentColor"
      strokeWidth="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.0033 20.0033L16.0517 16.0516"
      stroke="currentColor"
      strokeWidth="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'SearchIcon'

export { ForwardRef as SearchIcon }
