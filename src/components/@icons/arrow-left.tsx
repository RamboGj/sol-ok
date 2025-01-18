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
    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 18L6 12" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 6L6 12" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'ArrowLeftIcon'

export { ForwardRef as ArrowLeftIcon }
