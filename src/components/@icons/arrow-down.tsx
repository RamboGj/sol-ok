import type { Ref, SVGProps } from 'react'
import { forwardRef } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}>
    <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'ArrowDownIcon'

export { ForwardRef as ArrowDownIcon }
