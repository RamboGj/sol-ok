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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4821 3.43689H10.5179C9.67281 3.43689 8.84943 3.70442 8.16575 4.20114L5.76768 5.94344C5.08401 6.44017 4.57513 7.14057 4.31399 7.94428L3.398 10.7634C3.13686 11.5671 3.13686 12.4328 3.398 13.2366L4.31399 16.0557C4.57513 16.8594 5.08401 17.5598 5.76768 18.0565L8.16575 19.7988C8.84943 20.2955 9.67281 20.563 10.5179 20.563H13.4821C14.3271 20.563 15.1505 20.2955 15.8342 19.7988L18.2323 18.0565C18.9159 17.5598 19.4248 16.8594 19.6859 16.0557L20.6019 13.2366C20.8631 12.4328 20.8631 11.5671 20.6019 10.7634L19.6859 7.94428C19.4248 7.14057 18.9159 6.44017 18.2323 5.94344L15.8342 4.20114C15.1505 3.70442 14.3271 3.43689 13.4821 3.43689Z" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.1238 8.99874C9.1238 9.06781 9.06781 9.1238 8.99874 9.1238C8.92968 9.1238 8.87369 9.06781 8.87369 8.99874C8.87369 8.92968 8.92968 8.87369 8.99874 8.87369" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.99872 8.87372C9.06778 8.87372 9.12377 8.92971 9.12377 8.99877" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.1259 7.99838C14.1259 8.06744 14.0699 8.12343 14.0008 8.12343C13.9318 8.12343 13.8758 8.06744 13.8758 7.99838C13.8758 7.92931 13.9318 7.87333 14.0008 7.87333" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.0009 7.87323C14.0699 7.87323 14.1259 7.92922 14.1259 7.99828" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.1267 12C16.1267 12.069 16.0707 12.125 16.0017 12.125C15.9326 12.125 15.8766 12.069 15.8766 12C15.8766 11.9309 15.9326 11.8749 16.0017 11.8749" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.0016 11.8749C16.0707 11.8749 16.1267 11.9309 16.1267 12" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.125 12C12.125 12.069 12.069 12.125 12 12.125C11.9309 12.125 11.8749 12.069 11.8749 12C11.8749 11.9309 11.9309 11.8749 12 11.8749" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 11.8749C12.0691 11.8749 12.1251 11.9309 12.1251 12" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.12337 14.0008C8.12337 14.0699 8.06738 14.1259 7.99832 14.1259C7.92925 14.1259 7.87326 14.0699 7.87326 14.0008C7.87326 13.9318 7.92925 13.8758 7.99832 13.8758" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.99835 13.8758C8.06742 13.8758 8.1234 13.9318 8.1234 14.0008" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.1254 16.0017C13.1254 16.0707 13.0695 16.1267 13.0004 16.1267C12.9313 16.1267 12.8753 16.0707 12.8753 16.0017C12.8753 15.9326 12.9313 15.8766 13.0004 15.8766" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.0004 15.8766C13.0695 15.8766 13.1255 15.9326 13.1255 16.0017" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
ForwardRef.displayName = 'CookieIcon'

export { ForwardRef as CookieIcon }
