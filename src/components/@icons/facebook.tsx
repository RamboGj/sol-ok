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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z" stroke="#0373B7" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.1 12.9H16.5" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.5 8.40002H15.555C14.089 8.40002 12.9 9.58902 12.9 11.055V12V21" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'FacebookIcon'

export { ForwardRef as FacebookIcon }
