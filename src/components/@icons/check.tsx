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
    <path d="M20 6.5L9 17.5L4 12.5" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'CheckIcon'

export { ForwardRef as CheckIcon }
